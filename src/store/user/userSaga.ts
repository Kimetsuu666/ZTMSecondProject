import { all, call, takeLatest, put } from 'typed-redux-saga/macro'
import { USER_ACTION_TYPES } from './userTypes';
import {
	AdditionalInfo,
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
	getCurrentUser,
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup, signOutUser
} from '../../utils/firebase/firebase';
import {
	EmailSignInStart,
	signInFailure,
	signInSuccess,
	signOutFailure,
	signOutSuccess,
	signUpFailure, SignUpStart, SignUpSuccess,
	signUpSuccess
} from './userActions';
import { User } from 'firebase/auth';

export function* getSnapshotFromUserAuth(userAuth: User, addDetails?: AdditionalInfo) {
	try {
		const userSnapshot = yield* call(createUserDocumentFromAuth, userAuth, addDetails)
		if (userSnapshot) {
			yield* put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
		}
	} catch (err) {
		yield* put(signInFailure(err as Error))
	}
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield* call(getCurrentUser);
		if (!userAuth) return;
		yield* call(getSnapshotFromUserAuth, userAuth, {})
	} catch (err) {
		yield* put(signInFailure(err as Error))
	}
}

export function* signInWithGoogle() {
	try {
		const { user } = yield* call(signInWithGooglePopup);
		yield* call(getSnapshotFromUserAuth, user)
	} catch (err) {
		yield* put(signInFailure(err as Error))
	}
}

export function* signInWithEmail({ payload }: EmailSignInStart) {
	try {
		const userCreds = yield* call(signInAuthUserWithEmailAndPassword, payload.email, payload.password)
		if (userCreds) {
			yield* call(getSnapshotFromUserAuth, userCreds.user)
		}
	} catch (err) {
		yield* put(signInFailure(err as Error))
	}
}

function* signUp({ payload }: SignUpStart) {
	try {
		const userCreds = yield* call(createAuthUserWithEmailAndPassword, payload.email, payload.password)
		if (userCreds) {
			yield* put(signUpSuccess(userCreds.user, { displayName: payload.displayName }))
		}
	} catch (err) {
		signUpFailure(err as Error);
	}
}

export function* signInAfterSignUp({ payload }: SignUpSuccess) {
	yield* call(getSnapshotFromUserAuth, payload.user, payload.addDetails)
}

export function* signOut() {
	try {
		yield* call(signOutUser)
		yield* put(signOutSuccess())
	} catch (err) {
		yield* put(signOutFailure(err as Error))
	}
}

export function* onGoogleSingInStart() {
	yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onCheckUserSession() {
	yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
	yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onSignUpStart() {
	yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
	yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignOutStart() {
	yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* userSagas() {
	yield* all(
		[
			call(onCheckUserSession),
			call(onGoogleSingInStart),
			call(onEmailSignInStart),
			call(onSignUpStart),
			call(onSignUpSuccess),
			call(onSignOutStart)
		]);
}
