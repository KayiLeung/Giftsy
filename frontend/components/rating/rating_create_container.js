import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { openModal } from "../../actions/modal_action";
import { createRating} from '../../actions/rating_action'
import RatingForm from "./rating_form";

const mSTP = (state, ownProps) => {
    // debugger
    return {
        user: state.session.id,
        currentUser: state.entities.users[state.session.id]
        
    }
}

const mDTP = dispatch => {
    // debugger
    return {
        createRating: (rating, productId) => dispatch(createRating(rating, productId)),
        openModal: modal => dispatch(openModal(modal)),
        
    }
}

export default withRouter(connect(mSTP, mDTP)(RatingForm))