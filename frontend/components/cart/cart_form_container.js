import { createCart, fetchCart, updateCart, fetchAllCarts } from "../../actions/cart_action";
import { fetchUser } from "../../actions/user_actions";
import Cartform from "./cart_form";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_action";
import { withRouter } from "react-router-dom";



const mSTP = (state, ownProps) => {
    debugger
    console.log(ownProps)
    return {
        currentUser: state.session.id,
        carts: Object.values(state.entities.carts)
    }
};

const mDTP = dispatch => ({
    createCart: (buyerId, cart) => dispatch(createCart(buyerId, cart)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    openModal: modal => dispatch(openModal(modal)),
    fetchCart: (cartId, userId) => dispatch(fetchCart(cartId, userId)),
    updateCart: (buyerId, cartId, cart) => dispatch(updateCart(buyerId, cartId, cart)),
    fetchAllCarts: (buyerId) => dispatch(fetchAllCarts(buyerId))
    
})

export default withRouter(connect(mSTP, mDTP)(Cartform))