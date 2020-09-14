
export type ErrorHttpAction = string

// SYNC

export const LOGIN_START_FETCHING = "LOGIN_START_FETCHING";
type LoginStartFetchingAction = {
    type: typeof LOGIN_START_FETCHING;
};

export const LOGIN_STOP_FETCHING = "LOGIN_STOP_FETCHING";
type LoginStopFetchingAction = {
    type: typeof LOGIN_STOP_FETCHING;
};

export const LOGIN_FILL = 'LOGIN_FILL';

export type LoginFillAction = {
    type: typeof LOGIN_FILL;
    payload: any;
};

export const LOGIN_SET_FETCHING_ERROR = 'LOGIN_SET_FETCHING_ERROR';

export type LoginSetFetchingErrorAction = {
    type: typeof LOGIN_SET_FETCHING_ERROR;
    error: true;
    payload: ErrorHttpAction;
};

// Async
export const LOGIN_FETCH_ASYNC = 'LOGIN_FETCH_ASYNC';
type LoginFetchAsyncAction = {
    type: typeof LOGIN_FETCH_ASYNC;
};


export type LoginActionTypes =
    | LoginStartFetchingAction
    | LoginStopFetchingAction
    | LoginFillAction
    | LoginSetFetchingErrorAction
    | LoginFetchAsyncAction;


export const authTypes = {
    // const here
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

