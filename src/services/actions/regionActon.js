import axios from "axios";
import { API_URL_GET_REGION, REQUEST_FAIL, REQUEST_SUCCESS, SEND_REQUEST } from "../constants/regionConstant";

export const getRegion = () => async (dispatch) => {
    dispatch({ type: SEND_REQUEST });
    try {
        const res = await axios.get(API_URL_GET_REGION, {
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
        dispatch({ type: REQUEST_SUCCESS, payload: res.data })
    } catch (error) {
        dispatch({ type: REQUEST_FAIL, payload: error.message });
    }
}


// export const createRegion = () => async (dispatch) => {
//     localStorage.removeItem("accessToken");
//     dispatch({ type: USER_LOGOUT });
// };