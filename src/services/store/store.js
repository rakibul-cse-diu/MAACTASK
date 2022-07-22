import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getRegionReducer } from "../reducers/regionReducer";
import signInReducer from "../reducers/signInReducer";
import signUpReducer from "../reducers/signUpReducer";

const reducer = combineReducers({
    userRegister: signUpReducer,
    userLogin: signInReducer,
    getRegion: getRegionReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;