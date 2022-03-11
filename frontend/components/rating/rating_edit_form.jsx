// import React from "react";
// import { connect } from "react-redux";
// import { fetchRating, updateRating} from '../../actions/rating_action'
// // import RatingForm from './rating_form'
// import RatingEditSubmitForm from '../../unuse/rating_edit_submit_form'


// class EditRatingForm extends React.Component{
//     debugger
//     componentDidMount(){
//         this.props.fetchRating(this.props.match.params.ratingId)
//     }

//     render(){
//         const {rating, action} = this.props;
//         if (!rating) return null;
//         const productId = rating.product_id
//         return (
//             <RatingEditSubmitForm
//             action={action}
//             rating={rating}
//             // productId={productId}
//             />
//         )
//     }


// }

// const mSTP = (state,ownProps) => {
//     debugger
//     return {
//         rating: state.entities.ratings[ownProps.match.params.ratingId],
//         user: state.session.id
//     }
// }

// const mDTP = dispatch => {
//     debugger
//     return {
//         fetchRating: ratingId => dispatch(fetchRating(ratingId)),
//         action: rating => dispatch(updateRating(rating))
//     }
// }

// export default connect(mSTP, mDTP)(EditRatingForm)