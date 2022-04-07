import { connect } from 'react-redux'
import ProductShowPage from './product_show_item'
import { fetchProduct } from '../../actions/product_action'
import { fetchAllRatings } from '../../actions/rating_action'
import { fetchUsers} from '../../actions/user_actions'

const mSTP = (state, ownProps) => {
    
    return {
        product: state.entities.products[ownProps.match.params.productId],
        users: state.entities.users,
        buyerId: state.session.id
    }
}

const mDTP = dispatch => {
    
    return {
        fetchProduct: productId => dispatch(fetchProduct(productId)),
        fetchAllRatings: () => dispatch(fetchAllRatings()),
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mSTP, mDTP)(ProductShowPage);