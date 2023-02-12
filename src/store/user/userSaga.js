import { all, call, takeLatest, put } from 'redux-saga/effects'
import { USER_ACTION_TYPES } from './userTypes';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
	getCurrentUser,
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup, signOutUser
} from '../../utils/firebase/firebase';
import {
	signInFailure,
	signInSuccess,
	signOutFailure,
	signOutSuccess,
	signUpFailure,
	signUpSuccess
} from './userActions';

export function* getSnapshotFromUserAuth(userAuth, addDetails) {
	try {
		const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, addDetails)
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
	} catch (err) {
		yield put(signInFailure(err))
	}
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield call(getCurrentUser);
		if (!userAuth) return;
		yield call(getSnapshotFromUserAuth, userAuth, {})
	} catch (err) {
		yield put(signInFailure(err))
	}
}

export function* signInWithGoogle() {
	try {
		const { user } = yield call(signInWithGooglePopup);
		yield call(getSnapshotFromUserAuth, user)
	} catch (err) {
		yield put(signInFailure(err))
	}
}

export function* signInWithEmail({ payload }) {
	try {
		const { user } = yield call(signInAuthUserWithEmailAndPassword, payload.email, payload.password)
		yield call(getSnapshotFromUserAuth, user)
	} catch (err) {
		yield put(signInFailure(err))
	}
}

function* signUp({ payload }) {
	try {
		const { user } = yield call(createAuthUserWithEmailAndPassword, payload.email, payload.password)
		yield put(signUpSuccess(user, { displayName: payload.displayName }))
	} catch (err) {
		signUpFailure(err);
	}
}

export function* signInAfterSignUp({ payload }) {
	yield call(getSnapshotFromUserAuth, payload.user, payload.addDetails)
}

export function* signOut() {
	try {
		yield call(signOutUser)
		yield put(signOutSuccess())
	} catch (err) {
		yield put(signOutFailure(err))
	}
}

export function* onGoogleSingInStart() {
	yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onCheckUserSession() {
	yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
	yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onSignUpStart() {
	yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
	yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignOutStart() {
	yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
}

export function* userSagas() {
	yield all(
		[
			call(onCheckUserSession),
			call(onGoogleSingInStart),
			call(onEmailSignInStart),
			call(onSignUpStart),
			call(onSignUpSuccess),
			call(onSignOutStart)
		]);
}
