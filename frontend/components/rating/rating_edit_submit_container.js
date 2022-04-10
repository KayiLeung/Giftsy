import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { closeModal, openModal } from "../../actions/modal_action";
import { createRating, updateRating } from '../../actions/rating_action'
// import { fetchProduct } from "../../actions/product_action";
import { fetchRating } from "../../actions/rating_action";
import RatingForm from "./rating_form";
import { fetchProduct} from '../../actions/product_action'
import RatingEditSubmitForm from '../rating/rating_edit_submit_form'

const mSTP = (state, ownProps) => {
    debugger
    return {
        user: state.session.id,
        currentUser: state.entities.users[state.session.id],
        // rating: state.entities.ratings[ownProps.rating.id],
        rating: state.entities.ratings[ownProps.match.params.ratingId],
    }
}

const mDTP = dispatch => {

    return {
        action: rating => dispatch(updateRating(rating)),
        fetchRating: ratingId => dispatch(fetchRating(ratingId)),
    }
    // fetchProduct: productId => dispatch(fetchProduct(productId)),
}

export default (connect(mSTP, mDTP)(RatingEditSubmitForm))
