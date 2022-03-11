import { connect } from "react-redux"
import { fetchCategory, fetchAllCategories } from '../../actions/catergory_action'
import CategoryIndex from './category_index'


const mSTP = state => {

    return {
        categories: Object.values(state.entities.categories)
    }
}

const mDTP = dispatch => {
    return {
        fetchAllCategories: () => dispatch(fetchAllCategories()),
        fetchCategory: categoryId => dispatch(fetchCategory(categoryId))
    }
}

export default connect(mSTP, mDTP)(CategoryIndex)