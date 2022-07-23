import { REQUEST_CREATE_FAIL, REQUEST_CREATE_SUCCESS, REQUEST_FAIL, REQUEST_SUCCESS, SEND_CREATE_REQUEST, SEND_REQUEST, USER_LOGOUT } from "../constants/regionConstant"

const initialRegionState = {
    regions: {},
    isLoading: false,
    error: null
}
const initialCreatedRegionState = {
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

export const createRegionReducer = (state = initialCreatedRegionState, action) => {
    switch (action.type) {
        case SEND_CREATE_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case REQUEST_CREATE_SUCCESS:
            return {
                ...state,
                regions: action.payload,
                isLoading: false,
                error: null
            }

        case REQUEST_CREATE_FAIL:
            return {
                ...state,
                regions: {},
                error: action.payload
            }

        default:
            return state;
    }
}
