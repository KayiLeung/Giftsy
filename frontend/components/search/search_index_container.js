import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchAllProducts, fetchProduct} from '../../actions/product_action'
import SearchIndex from "./search_index";

const mSTP = (state, ownProps) => {
    return {
        filteredProducts: ownProps.location.state.stateName,
    }
}

const mDTP = dispatch => {
    
    return {
        fetchProduct: productId => dispatch(fetchProduct(productId))
    }
}

export default withRouter(connect(mSTP, mDTP)(SearchIndex))