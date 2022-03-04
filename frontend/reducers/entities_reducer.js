
import { combineReducers } from "redux";
import categoryReducer from "./categories_reducer";
import productReducer from "./product_reducer";
import usersReducer from "./users_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productReducer,
    categories: categoryReducer
})

export default entitiesReducer;