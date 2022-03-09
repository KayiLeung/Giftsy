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

export const createRating = (productId, rating) => dispatch => (
    RatingApiUtil.createRating(productId,rating)
        .then(rating => dispatch(receiveRating(rating)))
)

export const updateRating = (productId, rating) => dispatch => (
    RatingApiUtil.updateRating(productId, rating)
        .then(rating => dispatch(receiveRating(rating)))
)


export const deleteRating = (productId,ratingId)  => dispatch => (
    RatingApiUtil.deleteRating(ratingId, productId)
        .then(() => dispatch(removeRating(ratingId)))
)


