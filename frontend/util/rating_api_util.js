export const receiveRatings = () => {
    // debugger
    return ($.ajax({
        method: 'GET',
        url: 'api/ratings'
    }))
}

export const receiveRating = (ratingId) => {
    // debugger
    return ($.ajax({
        method: 'GET',
        url: `api/ratings/${ratingId}`
    }))
}

export const createRating = (rating, productId) => {
    debugger
    return (
        $.ajax({
            method: 'POST',
            url: `/api/products/${productId}/ratings`,
            data: {rating}
        })
    )
} 

export const updateRating = (productId, rating) => {
    return (
        $.ajax({
            method: 'PATCH',
            url: `/api/products/${productId}/${rating.id}`,
            data: { rating }
        })
    )
}

export const deleteRating = (productId, ratingId) => {
    return (
        $.ajax({
            method: 'DELETE',
            url: `/api/products/${productId}/${ratingId}`,
        })
    )
}