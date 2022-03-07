import { connect } from "react-redux";
import { fetchCategory, fetchAllCategories } from '../../actions/catergory_action'
import BottomNavBar from "./bottom_nav_bar";


const mSTP = (state, ownProps) => {
    // debugger
    return {
        categories: Object.values(state.entities.categories),
    }
    // category : state.entities.categories[ownProps.match.params.categoryId]
}

const mDTP = dispatch => {
    // debugger
    return {
        fetchAllCategories: () => dispatch(fetchAllCategories()),
    }
    // fetchCategory: categoryId => dispatch(fetchCategory(categoryId))
}

export default connect(mSTP, mDTP)(BottomNavBar)