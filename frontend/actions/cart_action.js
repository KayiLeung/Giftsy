import * as CartApiUtil from '../util/cart_api_util'


export const RECEIVEALLCARTS = 'RECEIVEALLCARTS'
export const RECEIVECART = 'RECEIVECART'
export const DELETECART = 'DELETECART'


export const receiveAllCarts = (carts) => ({
    type: RECEIVEALLCARTS,
    carts
})

export const receiveCart = (cart) => ({
    type: RECEIVECART,
    cart
})

export const removeCart = (userId, cartId) => ({
    type: DELETECART,
    cartId
})
// add on 4/5
export const fetchAllCarts = cartId => dispatch => (
    CartApiUtil.fetchCarts()
        .then(carts => dispatch(receiveAllCarts(carts)))
)


export const fetchCart = (cartId, userId) => dispatch => (
    CartApiUtil.fetchCart(cartId, userId)
        .then(cart => dispatch(receiveCart(cart)))
)

export const createCart = (userId, cart) => dispatch => {
    debugger
    return (
        CartApiUtil.createCart(userId, cart)
            .then(cart => dispatch(receiveCart(cart)))
    )
}

export const updateCart = (userId, cartId, cartItem) => dispatch => {
    return (
        CartApiUtil.updateCart(userId, cartId, cartItem)
            .then(cartItem => dispatch(receiveCart(cartItem)))
    )
}

export const deleteCart = (cartId) => dispatch => (
    CartApiUtil.deleteCart(cartId)
    .then(() => dispatch(removeCart(cartId)))
)