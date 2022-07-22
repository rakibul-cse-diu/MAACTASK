import { API_URL, REQUEST_FAIL, REQUEST_SUCCESS, SEND_REQUEST } from "../constants/signUpConstant";


const userSignUp = (userData) => async (dispatch) => {
    dispatch({ type: SEND_REQUEST });
    try {
        await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === "success") {
                    dispatch({ type: REQUEST_SUCCESS, payload: data })
                } else {
                    dispatch({ type: REQUEST_FAIL, payload: data })
                }
            })

    } catch (error) {
        dispatch({ type: REQUEST_FAIL, payload: error });
    }
}

export default userSignUp;