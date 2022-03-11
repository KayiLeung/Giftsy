import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
        createRating,
        updateRating,
        deleteRating,
        fetchAllRatings,
        fetchRating           
        } from '../../actions/rating_action'
import {openModal} from '../../actions/modal_action'
import RatingIndex from './rating_index'

const mSTP = (state, ownProps) => {
    // debugger
    // users: state.entities.users,
    // product: state.entities.products[ownProps.match.params.productId]
    //get users and product from parent component Product show page
    return {
        user: state.session.id,
        currentUser: state.entities.users[state.session.id],

        ratings: Object.values(state.entities.ratings),

    }
}

const mDTP = dispatch => {
    // debugger
    return {
        createRating: (rating, productId) => dispatch(createRating(rating, productId)),
        updateRating: (rating) => dispatch(updateRating(rating)),
        deleteRating: (ratingId) => dispatch(deleteRating(ratingId)),
        fetchAllRatings: (() => dispatch(fetchAllRatings())),
        fetchRating: (ratingId => dispatch(fetchRating(ratingId))),
    }
    // openModal: (() => dispatch(openModal('edit')))
}

export default withRouter(connect(mSTP, mDTP)(RatingIndex))