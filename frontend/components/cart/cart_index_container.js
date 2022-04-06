import CartIndex from './cart_index'
import { connect } from "react-redux";


const mSTP = (state, ownProps) => {

    console.log(state, ownProps)
    return {
        buyerId: ownProps.match.params.userId
        // cartItems :Object.values(state.entities.carts)
    }
}

const mDTP = dispatch => ({
    // fetchAllCarts: (buyerId) => dispatch(fetchAllCarts(buyerId))
})


export default connect(mSTP, mDTP)(CartIndex)
