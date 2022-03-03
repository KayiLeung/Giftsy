import { connect } from 'react-redux'
import ProductIndex from './product_index'
import { fetchAllProducts, fetchProduct} from '../../actions/product_action'

const mSTP = (state, ownProps) => {
    // debugger
    return { 
        products : Object.values(state.entities.products)
    }
}

const mDTP = dispatch => {
    // debugger
    return {
        fetchAllProducts: () => dispatch(fetchAllProducts()),
        fetchProduct: productId => dispatch(fetchProduct(productId)),
    }
}

export default connect(mSTP, mDTP)(ProductIndex);