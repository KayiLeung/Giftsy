import { connect } from "react-redux"
import { fetchCategory} from '../../actions/catergory_action'
import CategoryShow from "./category_show"
import { fetchAllProducts } from "../../actions/product_action"


const mSTP = (state, ownProps) => {
    return {
        category: state.entities.categories[ownProps.match.params.categoryId],
        products: Object.values(state.entities.products)
        
    }
}

const mDTP = dispatch => {

    return {
        fetchCategory: id => dispatch(fetchCategory(id)),
        fetchAllProducts: () => dispatch(fetchAllProducts()),
        
    }
}

export default connect(mSTP, mDTP)(CategoryShow)