import { REQUEST_FAIL, REQUEST_SUCCESS, SEND_REQUEST, USER_LOGOUT } from "../constants/userConstant"

const initialUserState = {
    user: {},
    isLoading: false,
    error: null
}

export const signInReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case SEND_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case REQUEST_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                error: null
            }

        case REQUEST_FAIL:
            return {
                ...state,
                user: {},
                error: action.payload
            }

        case USER_LOGOUT:
            return {
                ...state,
                user: {},
                error: null
            }

        default:
            return state;
    }
}

export const signUpReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case SEND_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case REQUEST_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isLoading: false,
                error: null
            }

        case REQUEST_FAIL:
            return {
                ...state,
                user: {},
                error: action.payload
            }

        case USER_LOGOUT:
            return {
                ...state,
                user: {},
                error: null
            }

        default:
            return state;
    }
}