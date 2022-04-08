import OrderForm from './order_form'
import { connect } from "react-redux";
import { fetchAllCarts } from '../../actions/cart_action'
import { fetchAllProducts } from '../../actions/product_action';

const mSTP = (state, ownProps) => {

    console.log(state, ownProps)
    return {
        currentUser: state.session.id,
        cartItems: Object.values(state.entities.carts),
        products: state.entities.products,
    }
}

const mDTP = dispatch => ({
    fetchAllCarts: () => dispatch(fetchAllCarts()),
    fetchAllProducts: () => dispatch(fetchAllProducts()),
})


export default connect(mSTP, mDTP)(OrderForm)