import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_action';
import { createCart, fetchCart } from '../../actions/cart_action';
import Splash from './splash_page';


const mSTP = ({ session, entities: { users, cart } }, ownProps) => {
    debugger
    return {
        currentUser: users[session.id],
        cart: (cart === undefined ? undefined : cart[session.id])
    }
}


const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
        createCart: cart => dispatch(createCart(cart)),
        fetchCart: cartId => dispatch(fetchCart(cartId))
    }
}

export default connect(mSTP, mDTP)(Splash);