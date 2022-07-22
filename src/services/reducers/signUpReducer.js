import { REQUEST_FAIL, REQUEST_SUCCESS, SEND_REQUEST } from "../constants/signUpConstant"

const initialUserState = {
    user: {},
    isLoading: false,
    error: null
}

const signUpReducer = (state = initialUserState, action) => {
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
                isLoading: false
            }

        case REQUEST_FAIL:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}

export default signUpReducer;