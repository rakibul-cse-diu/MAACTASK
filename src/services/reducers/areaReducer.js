import { REQUEST_CREATE_FAIL, REQUEST_CREATE_SUCCESS, REQUEST_FAIL, REQUEST_SUCCESS, SEND_CREATE_REQUEST, SEND_REQUEST, USER_LOGOUT } from "../constants/areaConstant"

const initialAreaState = {
    areas: {},
    isLoading: false,
    error: null,
}
const initialCreatedAreaState = {
    areas: {},
    isLoading: false,
    error: null,
    haveError: false
}

export const getAreaReducer = (state = initialAreaState, action) => {
    switch (action.type) {
        case SEND_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case REQUEST_SUCCESS:
            return {
                ...state,
                areas: action.payload,
                isLoading: false,
                error: null
            }

        case REQUEST_FAIL:
            return {
                ...state,
                areas: {},
                error: action.payload
            }

        case USER_LOGOUT:
            return {
                ...state,
                areas: {},
                error: null
            }

        default:
            return state;
    }
}

export const createAreaReducer = (state = initialCreatedAreaState, action) => {
    switch (action.type) {
        case SEND_CREATE_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case REQUEST_CREATE_SUCCESS:
            return {
                ...state,
                areas: action.payload,
                isLoading: false,
                error: null,
                haveError: false
            }

        case REQUEST_CREATE_FAIL:
            return {
                ...state,
                areas: {},
                error: action.payload,
                haveError: true
            }

        default:
            return state;
    }
}
