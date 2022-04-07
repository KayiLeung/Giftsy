
import { combineReducers } from "redux";
import categoryReducer from "./categories_reducer";
import productReducer from "./product_reducer";
import usersReducer from "./users_reducer";
import ratingReducer from "./ratings_reducer";
import cartReducer from "./cart_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productReducer,
    categories: categoryReducer,
    ratings: ratingReducer,
    carts: cartReducer
})

export default entitiesReducer;