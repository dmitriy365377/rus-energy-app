import { authTypes } from './../../types/type';

const initialState = {
    currentUser: null
}

export const authReducer = (state = initialState) => {
    return state
    // switch (action.type) {
    //     case authTypes.SET_CURRENT_USER:
    //         return {
    //             ...state,
    //             currentUser: action.payload
    //         }
    //     default:
    //         return state;
    // }
}

