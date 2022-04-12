
export const fetchCarts = (userId) => {
    return (
        $.ajax({
            method: 'GET',
            url: `/api/carts/`
        })
    )
}

export const fetchCart = (cartId) => {
    debugger
    return (
        $.ajax({
            method: 'GET',
            url: `/api/carts/${cartId}`
        })
    )
}

export const createCart = (cart) => {
    debugger
    return (
        $.ajax({
            method: 'POST',
            url: `/api/carts/`,
            data: { cart }
        })
    )
}

export const updateCart = (cart) => {
    debugger
    return (
        $.ajax({
            method: 'PATCH',
            url: `/api/carts/${cart.id}`,
            data: { cart }
        })
    )
}

export const deleteCart = (cartId) => {
    return (
        $.ajax({
            method: 'DELETE',
            url: `/api/carts/${cartId}`
        })
    )
}
