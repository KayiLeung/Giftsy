import * as RatingApiUtil from '../util/rating_api_util'

export const RECEIVERATINGS = 'RECEIVERATINGS';
export const RECEIVERATING = 'RECEIVERATING';
export const DELETERATING = 'DELETERATING';

export const receiveAllRatings = (ratings) => ({
        type: RECEIVERATINGS,
        ratings
    
})

export const receiveRating = rating => ({
        type: RECEIVERATING,
        rating
    
})

export const removeRating = ratingId => ({
        type: DELETERATING,
        ratingId
})

export const fetchAllRatings = () => dispatch => (
    RatingApiUtil.receiveRatings()
        .then((ratings) => dispatch(receiveAllRatings(ratings)))
)

export const fetchRating = ratingId => dispatch => (
    RatingApiUtil.receiveRating(ratingId)
        .then(rating => dispatch(receiveRating(rating)))

)
export const createRating = (productId, rating) => dispatch => {
        return( 
        RatingApiUtil.createRating(productId,rating)
                .then((rating) =>{
                return  (dispatch(receiveRating(rating)))
                })
        )
}

export const updateRating = (rating) => dispatch => {
        // debugger
        return (
        RatingApiUtil.updateRating(rating)
                .then(rating => {
                 return ( dispatch(receiveRating(rating)))
                })
        )
}


export const deleteRating = (ratingId)  => dispatch => (
    RatingApiUtil.deleteRating(ratingId)
        .then(() => dispatch(removeRating(ratingId)))
)


