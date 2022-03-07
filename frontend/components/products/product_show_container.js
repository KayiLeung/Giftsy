import { connect } from 'react-redux'
import ProductShowPage from './product_show_item'
import { fetchProduct } from '../../actions/product_action'

const mSTP = (state, ownProps) => {
    debugger
    return {
        product: state.entities.products[ownProps.match.params.productId],
        users: state.entities.users
    }
}

const mDTP = dispatch => {
    debugger
    return {
        fetchProduct: productId => dispatch(fetchProduct(productId)),
    }
}

export default connect(mSTP, mDTP)(ProductShowPage);