
import { combineReducers } from "redux";
import categoryReducer from "./categories_reducer";
import productReducer from "./product_reducer";
import usersReducer from "./users_reducer";
import ratingReducer from "./ratings_reducer";
import cartReducer from './cart_reducer'
import cartItemReducer from './cart_item_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    products: productReducer,
    categories: categoryReducer,
    ratings: ratingReducer,
    carts: cartReducer,
    cartItems: cartItemReducer
})

export default entitiesReducer;