import { createCart } from "../../actions/cart_action";
import { fetchUser } from "../../actions/user_actions";
import Cartform from "./cart_form";
import { connect } from "react-redux";
import { openModal } from "../../actions/modal_action";
import { withRouter } from "react-router-dom";


const mSTP = state => ({
    currentUser: state.session.id
});

const mDTP = dispatch => ({
    createCart: (buyerId, cart) => dispatch(createCart(buyerId, cart)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    openModal: modal => dispatch(openModal(modal)),
    
})

export default withRouter(connect(mSTP, mDTP)(Cartform))