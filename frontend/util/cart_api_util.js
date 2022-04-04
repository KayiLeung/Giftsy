export const fetchCart = (userId, cartId) => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/users/${userId}/cart/${cartId}`
        })
    )
}

export const createCart = (userId, cart) => {
    debugger
    $.ajax({
        method: 'POST',
        url: `/api/users/${userId}/cart/`,
        data: {cart}
    })
}

export const deleteCart = (userId, cartId) => {
    return (
        $.ajax({
            method: 'DELETE',
            url: `/api/users/${userId}/cart/${cartId}`
        })
    )
}
