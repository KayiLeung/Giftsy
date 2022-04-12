import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
        createRating,
        updateRating,
        deleteRating,
        fetchAllRatings,
        fetchRating           
        } from '../../actions/rating_action'
import { openModal} from '../../actions/modal_action'
import { giveRatingId} from '../../actions/modal_info_action'
import RatingIndex from './rating_index'
import {fetchUsers} from '../../actions/user_actions'
// import { giveRatingId } from "../../actions/modal_info_action";

const mSTP = (state, ownProps) => {
    return {
        allUsers: Object.values(state.entities.users),
        currentUser: state.entities.users[state.session.id],
        ratings: Object.values(state.entities.ratings),

    }
}

const mDTP = dispatch => {

    return {
        createRating: (rating, productId) => dispatch(createRating(rating, productId)),
        updateRating: (rating) => dispatch(updateRating(rating)),
        deleteRating: (ratingId) => dispatch(deleteRating(ratingId)),
        fetchAllRatings: (() => dispatch(fetchAllRatings())),
        fetchUsers:(() => dispatch(fetchUsers())),
        fetchRating: (ratingId => dispatch(fetchRating(ratingId))),
        openModal: (form => dispatch(openModal(form))),
        // giveRatingId: ratingId => dispatch(giveRatingId(ratingId))
    }
}

export default withRouter(connect(mSTP, mDTP)(RatingIndex))