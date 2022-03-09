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

export const createRating = (productId, rating) => {
    return (
        $.ajax({
            method: 'CREATE',
            url: `/api/products/${productId}/ratings`,
            date: {rating}
        })
    )
} 

export const updateRating = (productId, rating) => {
    return (
        $.ajax({
            method: 'PATCH',
            url: `/api/products/${productId}/${rating.id}`,
            date: { rating }
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