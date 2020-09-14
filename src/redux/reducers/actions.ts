import { authTypes } from '../typeAction/type';
import {
    LOGIN_START_FETCHING,
    LOGIN_STOP_FETCHING,
    LOGIN_FILL,
    LOGIN_SET_FETCHING_ERROR,
    LOGIN_FETCH_ASYNC,
    LoginActionTypes,
    LoginFillAction,
    LoginSetFetchingErrorAction,
    ErrorHttpAction
} from '../typeAction/type';



// Sync
export function startFetching(): LoginActionTypes {
    return {
        type: LOGIN_START_FETCHING
    }
}

export function stopFetching(): LoginActionTypes {
    return {
        type: LOGIN_STOP_FETCHING,
    };
}

export function fill(payload: any): LoginFillAction {
    return {
        type: LOGIN_FILL,
        payload,
    };
}

export function setFetchingError(payload: ErrorHttpAction): LoginSetFetchingErrorAction {
    return {
        type: LOGIN_SET_FETCHING_ERROR,
        error: true,
        payload,
    };
}

export const setCurrentUser = () => {
    return {
        type: authTypes.SET_CURRENT_USER
    }
}

export function fetchAsync(values: any) {
    return {
        type: LOGIN_FETCH_ASYNC,
        payload: values
    }
}


