import { createContext, useEffect, useReducer } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase';
import { createAction } from '../utils/reducer/reducerUtils';

// actual value
export const UserContext = createContext({
	currentUser: null,
	setCurrentUser: () => null
});

export const USER_ACTION_TYPES = {
	SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
	switch (action.type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload
			}
		default:
			throw new Error(`Unhandled type ${action.type} in user reducer`);
	}
}

const INITIAL_STATE = {
	currentUser: null
}

export function AuthProvider({ children }) {
	const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

	const { currentUser } = state;

	const setCurrentUser = (user) => dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))

	const value = { currentUser, setCurrentUser }

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener(async (user) => {
			if (user) {
				await createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		});

		return unsubscribe;
	}, []);
	
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
