import { REQUEST_FAIL, REQUEST_SUCCESS, SEND_REQUEST } from "../constants/signInConstant"

const initialUserState = {
    user: {},
    isLoading: false,
    error: null
}

const signInReducer = (state = initialUserState, action) => {
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

        default:
            return state;
    }
}

export default signInReducer;