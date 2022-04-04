import { createCart } from "../../actions/cart_action";
import { fetchUser } from "../../actions/user_actions";


const mSTP = state => ({
    userId: state.session.id
});

const mDTP = dispatch => ({
    createCart: (userId, cart) => dispatch(createCart(userId, cart)),
    fetchUser: userId => dispatch(fetchUser(userId))
    
})