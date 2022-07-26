import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { createAreaReducer, getAreaReducer } from "../reducers/areaReducer";
import { createRegionReducer, getRegionReducer } from "../reducers/regionReducer";
import { signInReducer, signUpReducer } from "../reducers/userReducer";


const reducer = combineReducers({
    userRegister: signInReducer,
    userLogin: signUpReducer,
    getRegion: getRegionReducer,
    createdRegion: createRegionReducer,
    getArea: getAreaReducer,
    createdArea: createAreaReducer,
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;