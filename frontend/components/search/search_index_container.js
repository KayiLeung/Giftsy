import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchProduct} from '../../actions/product_action'
import SearchIndex from "./search_index";

const mSTP = (state, ownProps) => {
    let filteredProducts = Object.values(state.entities.products)
        .filter(product => product.title.toLowerCase().includes(ownProps.location.search.slice(8).toLowerCase()))
    return {
            filteredProducts,
    }
}

const mDTP = dispatch => {
    
    return {
        fetchProduct: productId => dispatch(fetchProduct(productId))
    }
}

export default withRouter(connect(mSTP, mDTP)(SearchIndex))