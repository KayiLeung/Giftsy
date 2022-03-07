import { connect } from "react-redux"
import { fetchCategory, fetchAllCategories } from '../../actions/catergory_action'
import CircleCategoryIndex from "./circle_category_index"


const mSTP = state => {
    // debugger
    return {
        categories: Object.values(state.entities.categories)
    }
}

const mDTP = dispatch => {
    // debugger
    return {
        fetchAllCategories: () => dispatch(fetchAllCategories()),
        fetchCategory: categoryId => dispatch(fetchCategory(categoryId))
    }
}

export default connect(mSTP, mDTP)(CircleCategoryIndex)