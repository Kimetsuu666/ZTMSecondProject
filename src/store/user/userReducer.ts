import { USER_ACTION_TYPES } from './userTypes';
import { UserData } from '../../utils/firebase/firebase';
import { AnyAction } from 'redux';
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess, signUpFailure } from './userActions';

export type UserState = {
	readonly currentUser: UserData | null,
	readonly isLoading: boolean,
	readonly error: Error | null
}

const initialState: UserState = {
	currentUser: null,
	isLoading: false,
	error: null
};

export const userReducer = (state = initialState, action: AnyAction): UserState => {
	console.log(action);
	if (signInSuccess.match(action.type)) {
		return {
			...state,
			currentUser: action.payload
		}
	}

	if (signOutSuccess.match(action.type)) {
		return {
			...state,
			currentUser: null
		}
	}

	if (signOutFailure.match(action.type) || signUpFailure.match(action.type) || signInFailure.match(action.type)) {
		return {
			...state,
			error: action.payload
		}
	}

	return state;
};
