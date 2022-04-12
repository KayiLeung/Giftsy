
import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Rating from '@mui/material/Rating'
import RatingEditSubmitFormContainer from '../rating/rating_edit_submit_container'
import RatingEditSubmitForm from '../rating/rating_edit_submit_form'
import { updateRating } from '../../util/rating_api_util';
const ReviewIndexItem = props => {

    // const editRating = (e) => {
    //     props.openModal('edit')
    // }

    return (
        <div className='rating-container'>
            <div className='customer-ratings'>
                <Rating
                    style={{ color: 'black' }}
                    name='Rating Rank'
                    value={props.rating.score}
                    precision={0.5}
                    key={`rating-${props.rating.id}`}
                />
            </div>
            {props.currentUser.id === props.rating.buyer_id ?
            
                (<div className='rating-edit-delete-btn'>
                    <Link to={`/ratings/${props.ratingId}`}>Edit</Link>
                    <button onClick={() => props.deleteRating(props.ratingId)
                    }>
                        Delete
                    </button>
                </div>) : null
            }
        </div>
    )

}
export default ReviewIndexItem;