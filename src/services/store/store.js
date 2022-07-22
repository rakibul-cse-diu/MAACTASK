import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import signInReducer from "../reducers/signInReducer";
import signUpReducer from "../reducers/signUpReducer";

const reducer = combineReducers({
    userRegister: signUpReducer,
    userLogin: signInReducer
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store;