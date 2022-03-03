import { connect } from 'react-redux'
import ProductShow from './products'

const mSTP = (state, ownProps) => {

    return {
        productId: state.products[ownProps.match.params.productId],
        product: state.entities.products[match.params.productId]
    }
}

const mDTP = dispatch => {

    return {
        fetchProducts: () => dispatch(fetchProducts()),
        fetchProduct: productId => dispatch(fetchProduct(productId)),
    }
}

export default connect(mSTP, mDTP)(ProductShow);