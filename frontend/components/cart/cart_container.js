import { fetchUser } from "../../actions/user_actions";
import Cartform from "./cart_form";

import { openModal } from "../../actions/modal_action";
import { withRouter } from "react-router-dom";
import { createCart, updateCart, fetchAllCarts } from '../../actions/cart_action'
import { connect } from "react-redux";


const mSTP = (state, ownProps) => {
    debugger
    console.log(ownProps)
    return {
        currentUser: state.session.id,
        carts: Object.values(state.entities.carts)
    }
};

const mDTP = dispatch => ({
    createCart: (userId, cart) => dispatch(createCart(userId, cart)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    openModal: modal => dispatch(openModal(modal)),
    updateCart: ( cart) => dispatch(updateCart( cart)),
    fetchAllCarts: () => dispatch(fetchAllCarts()),

})

export default withRouter(connect(mSTP, mDTP)(Cartform))