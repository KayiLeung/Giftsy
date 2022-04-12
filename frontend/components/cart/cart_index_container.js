import CartIndex from './cart_index'
import { connect } from "react-redux";
import { fetchAllCarts, deleteCart, updateCart} from '../../actions/cart_action'
import { fetchAllProducts } from '../../actions/product_action';
import { openModal} from '../../actions/modal_action'

const mSTP = (state, ownProps) => {
    debugger
    return {
        buyerId: ownProps.match.params.userId,
        carts : Object.values(state.entities.carts),
        products: state.entities.products,
    }
}

const mDTP = dispatch => ({
    fetchAllCarts: () => dispatch(fetchAllCarts()),
    fetchAllProducts: () => dispatch(fetchAllProducts()),
    openModal: modal => dispatch(openModal(modal)),
    deleteCart: cartId => dispatch(deleteCart(cartId)),
    updateCart: ( cart) => dispatch(updateCart( cart))
})


export default connect(mSTP, mDTP)(CartIndex)