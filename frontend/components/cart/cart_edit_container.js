import { withRouter } from "react-router-dom";
import { updateCart } from '../../actions/cart_action'
import { connect } from "react-redux";
import CartEditForm from './cart_edit_form'

const mSTP = (state, ownProps) => {
    return {
        cart: state.entities.carts[ownProps.cart.id]
    }
}

const mDTP = dispatch => ({
    updateCart: (cart) => dispatch(updateCart(cart)),
})

export default withRouter(connect(mSTP, mDTP)(CartEditForm))