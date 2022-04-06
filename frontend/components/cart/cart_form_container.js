import { createCartItem, updateCartItem } from "../../actions/cart_item_action";
import { fetchUser } from "../../actions/user_actions";
import Cartform from "./cart_form";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_action";
import { withRouter } from "react-router-dom";
import {createCart} from '../../actions/cart_action'



const mSTP = (state, ownProps) => {
    debugger
    console.log(ownProps)
    return {
        currentUser: state.session.id,
        cart: (state.entities.carts === {} ? undefined : state.entities.carts[0])
    }
};

const mDTP = dispatch => ({
    createCart: (userId, cart) => dispatch(createCart(userId,cart)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    openModal: modal => dispatch(openModal(modal)),
    fetchCart: (cartId, userId) => dispatch(fetchCart(cartId, userId)),
    createCartItem: (cartId, cartItem) => dispatch(createCartItem(cartId, cartItem)),
    updateCartItem: (cartId, cartItem) => dispatch(updateCartItem(cartId, cartItem))

    
})

export default withRouter(connect(mSTP, mDTP)(Cartform))