import { REQUEST_FAIL, REQUEST_SUCCESS, SEND_REQUEST } from "../constants/regionConstant"

const initialUserState = {
    regions: {},
    isLoading: false,
    error: null
}

export const getRegionReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case SEND_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case REQUEST_SUCCESS:
            return {
                ...state,
                regions: action.payload,
                isLoading: false,
                error: null
            }

        case REQUEST_FAIL:
            return {
                ...state,
                regions: {},
                error: action.payload
            }

        default:
            return state;
    }
}
