import { authTypes } from '../typeAction/type';
import {
    ErrorActionType,
} from '../../types';

import {
    LOGIN_START_FETCHING,
    LOGIN_STOP_FETCHING,
    LOGIN_FILL,
    LOGIN_SET_FETCHING_ERROR,
    LOGIN_FETCH_ASYNC,
    LoginActionTypes
} from '../typeAction/type'
import { act } from '@testing-library/react';

export type LoginState = {
    currentUser: any,
    isFetching: boolean,
    error: false | ErrorActionType
}

const initialState: LoginState = {
    currentUser: null,
    isFetching: false,
    error: false
}

export const authReducer = (state = initialState, action: LoginActionTypes) => {
    console.log('action',action)
    switch (action.type) {
        case LOGIN_START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: false
            };
        case LOGIN_STOP_FETCHING:
            return {
                ...state,
                isFetching: false,
                error: false
            };
        case LOGIN_SET_FETCHING_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case LOGIN_FILL:
            return {
                ...state,
                currentUser: action.payload,
                error: false
            }
        case LOGIN_FETCH_ASYNC:
            return state;
        default:
            return state
    }

}

// switch (action.type) {
    //     case authTypes.SET_CURRENT_USER:
    //         return {
    //             ...state,
    //             currentUser: action.payload
    //         }
    //     default:
    //         return state;
    // }