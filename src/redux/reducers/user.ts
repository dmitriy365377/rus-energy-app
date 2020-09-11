import { handleActions } from 'redux-actions';
import { IUser } from '../../types';
import { UserActions } from '../actions/user';

const initialState = null;

export const UserReducer = handleActions<IUser | null, IUser>({
    [UserActions.Type.SET_USER]: (state, action) => action.payload,
}, initialState);