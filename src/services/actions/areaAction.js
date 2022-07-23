import axios from "axios";
import { API_URL_CREATE_AREA, API_URL_GET_AREA, REQUEST_CREATE_FAIL, REQUEST_CREATE_SUCCESS, REQUEST_FAIL, REQUEST_SUCCESS, SEND_CREATE_REQUEST, SEND_REQUEST } from "../constants/areaConstant";

export const getArea = () => async (dispatch) => {
    dispatch({ type: SEND_REQUEST });
    try {
        const res = await axios.get(API_URL_GET_AREA, {
            headers: {
                'Content-Type': 'application/json',

                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
        dispatch({ type: REQUEST_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: REQUEST_FAIL, payload: error.message });
    }
}


export const createArea = (regionData) => async (dispatch) => {
    dispatch({ type: SEND_CREATE_REQUEST });
    try {
        await fetch(API_URL_CREATE_AREA, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(regionData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    dispatch({ type: REQUEST_CREATE_SUCCESS, payload: data })
                } else {
                    dispatch({ type: REQUEST_CREATE_FAIL, payload: data })
                }
            })

    } catch (error) {
        dispatch({ type: REQUEST_CREATE_FAIL, payload: error });
    }
};