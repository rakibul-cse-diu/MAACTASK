import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import signInReducer from "../reducers/signInReducer";
import signUpReducer from "../reducers/signUpReducer";

const reducer = combineReducers({
    userRegister: signUpReducer,
    userLogin: signInReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;