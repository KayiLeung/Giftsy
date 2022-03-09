import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { openModal } from "../../actions/modal_action";
import { createRating} from '../../actions/rating_action'
import { fetchProduct } from "../../actions/product_action";
import { fetchUser } from "../../actions/user_actions";
import RatingForm from "./rating_form";

const mSTP = (state, ownProps) => {
    // debugger
    return {
        user: state.session.id,
        currentUser: state.entities.users[state.session.id],
        product: state.entities.products[ownProps.match.params.productId]
        
    }
}

const mDTP = dispatch => {
    // debugger
    return {
        createRating: (rating, productId) => dispatch(createRating(rating, productId)),
        openModal: modal => dispatch(openModal(modal)),
        fetchProduct: productId => dispatch(fetchProduct(productId)),
        


        
    }
}

export default withRouter(connect(mSTP, mDTP)(RatingForm))