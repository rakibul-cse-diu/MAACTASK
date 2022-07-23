import { API_URL_SIGNIN, REQUEST_FAIL, REQUEST_SUCCESS, SEND_REQUEST, USER_LOGOUT } from "../constants/userConstant";

export const userSignIn = (userData) => async (dispatch) => {
    dispatch({ type: SEND_REQUEST });
    try {
        await fetch(API_URL_SIGNIN, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    dispatch({ type: REQUEST_SUCCESS, payload: data })
                    localStorage.setItem('accessToken', data.token);
                } else {
                    dispatch({ type: REQUEST_FAIL, payload: data })
                }
            })

    } catch (error) {
        dispatch({ type: REQUEST_FAIL, payload: error });
    }
}

export const logout = () => async (dispatch) => {
    localStorage.removeItem("accessToken");
    dispatch({ type: USER_LOGOUT });
};