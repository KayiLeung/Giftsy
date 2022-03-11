import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { openModal } from "../../actions/modal_action";
import { createRating} from '../../actions/rating_action'
import { fetchProduct } from "../../actions/product_action";
import { fetchUser } from "../../actions/user_actions";
import { fetchRating } from "../../actions/rating_action";
import RatingForm from "./rating_form";

const mSTP = (state, ownProps) => {
 
    return {
        user: state.session.id,
        currentUser: state.entities.users[state.session.id],
        product: state.entities.products[ownProps.match.params.productId],
        formType: 'create_rating'
    }
}

const mDTP = dispatch => {
   
    return {
        action: (rating, productId) => dispatch(createRating(rating, productId)),
        openModal: modal => dispatch(openModal(modal)),
        fetchProduct: productId => dispatch(fetchProduct(productId)), 
        fetchRating: ratingId => dispatch(fetchRating(ratingId)),
    }
}

export default withRouter(connect(mSTP, mDTP)(RatingForm))