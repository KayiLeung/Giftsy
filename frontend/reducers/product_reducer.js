import { FETCHPRODUCTS, FETCHPRODUCT} from '../actions/product_action'

const productReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state)

    switch (action.type) {
        case FETCHPRODUCTS:
            return action.products
        case FETCHPRODUCT:
            nextState[action.product.id] = action.product;
            return nextState;
        default:
            return state;
    }

}
export default productReducer;