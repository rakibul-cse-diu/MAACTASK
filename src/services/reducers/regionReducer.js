import { REQUEST_FAIL, REQUEST_SUCCESS, SEND_REQUEST, USER_LOGOUT } from "../constants/regionConstant"

const initialRegionState = {
    regions: {},
    isLoading: false,
    error: null
}

export const getRegionReducer = (state = initialRegionState, action) => {
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

        case USER_LOGOUT:
            return {
                ...state,
                regions: {},
                error: null
            }

        default:
            return state;
    }
}
