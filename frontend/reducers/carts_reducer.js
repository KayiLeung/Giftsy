import { RECEIVECART, DELETECART, RECEIVEALLCARTS } from '../actions/cart_action'
import  merge  from "lodash/merge"


const cartReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = merge({}, state);

    switch (action.type) {
        case RECEIVEALLCARTS:
            return action.carts

        case RECEIVECART:
            nextState[action.cart.id] = action.cart;
            return nextState;

        case DELETECART:
            delete nextState[action.cartId];
            return nextState

        default:
            return state
    }
}

export default cartReducer;