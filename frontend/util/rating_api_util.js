export const receiveRatings = () => {
    return ($.ajax({
        method: 'GET',
        url: 'api/ratings'
    }))
}

export const receiveRating = (ratingId) => {
    return ($.ajax({
        method: 'GET',
        url: `api/ratings/${ratingId}`
    }))
}

export const createRating = (rating, productId) => {
    return (
        $.ajax({
            method: 'POST',
            url: `/api/products/${productId}/ratings`,
            data: {rating}
        })
    )
} 

export const updateRating = (rating) => {
    // debugger
    return (
        $.ajax({
            method: 'PATCH',
            url: `/api/ratings/${rating.id}`,
            data: { rating }
        })
    )
}

export const deleteRating = (ratingId) => {
    return (
        $.ajax({
            method: 'DELETE',
            url: `/api/ratings/${ratingId}`,
        })
    )
}