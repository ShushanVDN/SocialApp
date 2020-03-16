import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import disalogsReducer from "./disalogsReducer";
import sideBarReducer from "./sideBarReducer";
import usersReducer from './usersReducer'

let reducers =  combineReducers({
    profilePage: profileReducer,
    disalogsPage: disalogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer
})

let store = createStore(reducers)

window.store = store

export default store
