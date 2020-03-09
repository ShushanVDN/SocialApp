import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import disalogsReducer from "./disalogsReducer";
import sideBarReducer from "./sideBarReducer";

let reducers =  combineReducers({
    profileReducer,
    disalogsReducer,
    sideBarReducer
})

let store = createStore(reducers)

export default store
