import { Action, ActionWithPayload, createAction, withMatcher } from '../../utils/reducer/reducerUtils';
import { USER_ACTION_TYPES } from './userTypes';
import { AdditionalInfo, UserData } from '../../utils/firebase/firebase';
import { User } from 'firebase/auth';

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;
export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;
export type EmailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email: string, password: string }>;
export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, UserData>;
export type SignInFailure = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, Error>;
export type SignUpStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START, { email: string, password: string, displayName: string }>;
export type SignUpSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user: User, addDetails: AdditionalInfo }>;
export type SignUpFailure = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED, Error>;
export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;
export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;
export type SignOutFailure = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED, Error>;

export const checkUserSession = withMatcher((): CheckUserSession => createAction(
	USER_ACTION_TYPES.CHECK_USER_SESSION,
));

export const googleSignInStart = withMatcher((): GoogleSignInStart => createAction(
	USER_ACTION_TYPES.GOOGLE_SIGN_IN_START
));

export const emailSignInStart = withMatcher((email: string, password: string): EmailSignInStart => createAction(
	USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
	{ email, password }
));

export const signInSuccess = withMatcher((user: UserData & { id: string }): SignInSuccess => createAction(
	USER_ACTION_TYPES.SIGN_IN_SUCCESS,
	user
));

export const signInFailure = withMatcher((error: Error): SignInFailure => createAction(
	USER_ACTION_TYPES.SIGN_IN_FAILED,
	error
));

export const signUpStart = withMatcher((email: string, password: string, displayName: string): SignUpStart => createAction(
	USER_ACTION_TYPES.SIGN_UP_START,
	{ email, password, displayName }
));

export const signUpSuccess = withMatcher((user: User, addDetails: AdditionalInfo): SignUpSuccess => createAction(
	USER_ACTION_TYPES.SIGN_UP_SUCCESS,
	{ user, addDetails }
))

export const signUpFailure = withMatcher((error: Error): SignUpFailure => createAction(
	USER_ACTION_TYPES.SIGN_UP_FAILED,
	error
))

export const signOutStart = withMatcher((): SignOutStart => createAction(USER_ACTION_TYPES.SIGN_OUT_START));

export const signOutSuccess = withMatcher((): SignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS));

export const signOutFailure = withMatcher((error: Error): SignOutFailure => createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error));
