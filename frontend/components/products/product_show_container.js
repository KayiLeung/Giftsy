import { connect } from 'react-redux'
import ProductShowPage from './product_show_item'
import { fetchProduct } from '../../actions/product_action'
import { fetchAllRatings } from '../../actions/rating_action'
import { fetchUsers} from '../../actions/user_actions'
import { createCart} from '../../actions/cart_action'
const mSTP = (state, ownProps) => {
    // debugger
    return {
        product: state.entities.products[ownProps.match.params.productId],
        users: state.entities.users,
        currentUserId: state.session.id
    }
}

const mDTP = dispatch => {
    
    return {
        fetchProduct: productId => dispatch(fetchProduct(productId)),
        fetchAllRatings: () => dispatch(fetchAllRatings()),
        fetchUsers: () => dispatch(fetchUsers()),
        createCart: (userId, cart) => dispatch(createCart(userId, cart))
    }
}

export default connect(mSTP, mDTP)(ProductShowPage);