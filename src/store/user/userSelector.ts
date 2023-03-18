import { UserState } from './userReducer';
import { RootState } from '../store';

export const userSelector = (state: RootState): UserState => state.user;
