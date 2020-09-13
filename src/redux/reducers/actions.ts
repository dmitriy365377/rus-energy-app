import { authTypes } from './../../types/type';
import { LOGIN_FETCH_ASYNC } from '../../types/type';

export const setCurrentUser = () => {
    return {
        type: authTypes.SET_CURRENT_USER
    }
}

export function fetchAsync(values:any) {
    return {
        type: LOGIN_FETCH_ASYNC,
        payload: values
    }
}


