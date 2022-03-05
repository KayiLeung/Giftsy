import { connect } from "react-redux"
import {categoryIndex} from './categoryIndex'

const mSTP = state => {

    return {
        category: Object.values(state.entities.categoryId)
    }
}

const mDTP = dispatch => {

    return {
        fetchAllCategories: () => dispatch(fetchAllCategories()),
        fetchCategory: categoryId => dispatch(fetchCategory(categoryId))
    }
}

export default connect(mSTP, mDTP)(categoryIndex)