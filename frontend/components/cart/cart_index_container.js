import CartIndex from './cart_index'
import { connect } from "react-redux";
import { fetchAllCarts} from '../../actions/cart_action'
import { fetchAllProducts } from '../../actions/product_action';
import { openModal} from '../../actions/modal_action'

const mSTP = (state, ownProps) => {

    console.log(state, ownProps)
    return {
        buyerId: ownProps.match.params.userId,
        cartItems : Object.values(state.entities.carts),
        products: Object.values(state.entities.products),
    }
}

const mDTP = dispatch => ({
    fetchAllCarts: () => dispatch(fetchAllCarts()),
    fetchProduct: (productId) => dispatch(fetchAllProducts(productId)),
    openModal: modal => dispatch(openModal(modal)),
})


export default connect(mSTP, mDTP)(CartIndex)