export const fetchCarts = (userId) => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/users/${userId}/carts/`
        })
    )
}

export const fetchCart = (userId, cartId) => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/users/${userId}/carts/${cartId}`
        })
    )
}

export const createCart = (userId, cart) => {
    debugger
    return (
        $.ajax({
            method: 'POST',
            url: `/api/users/${userId}/carts/`,
            data: { cart }
        })
    )
}

export const updateCart = (userId, cartId, cart) => {
    return (
        $.ajax({
            method: 'PATCH',
            url: `/api/users/${userId}/carts/${cartId}`,
            data: { cart }
        })
    )
}

export const deleteCart = (userId, cartId) => {
    return (
        $.ajax({
            method: 'DELETE',
            url: `/api/users/${userId}/carts/${cartId}`
        })
    )
}