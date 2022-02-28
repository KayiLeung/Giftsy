
import { combineReducers } from "redux";
import uiReducer from "./ui_reducer";
import usersReducer from "./users_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    ui : uiReducer
})

export default entitiesReducer;