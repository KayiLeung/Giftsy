import { RECEIVECART, DELETECART} from '../actions/cart_action'

const cartReducer = (state={} , action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVECART:
            return action.cart
        case DELETECART:
            delete nextState[action.cartId];
            return nextState
        default:
            return state
    }
}

export default cartReducer;