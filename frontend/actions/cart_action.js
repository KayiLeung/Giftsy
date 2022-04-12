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

export const removeCart = (cartId) => ({
    type: DELETECART,
    cartId
})
// add on 4/5
export const fetchAllCarts = () => dispatch => (
    CartApiUtil.fetchCarts()
        .then(carts => dispatch(receiveAllCarts(carts)))
)


export const fetchCart = (cartId) => dispatch => (
    CartApiUtil.fetchCart(cartId)
        .then(cart => dispatch(receiveCart(cart)))
)

export const createCart = ( cart) => dispatch => {
    return (
        CartApiUtil.createCart( cart)
            .then(cart => dispatch(receiveCart(cart)))
    )
}

export const updateCart = (cart) => dispatch => {
    return (
        CartApiUtil.updateCart(cart)
            .then(cart => dispatch(receiveCart(cart)))
    )
}

export const deleteCart = (cartId) => dispatch => (
    CartApiUtil.deleteCart(cartId)
        .then(() => dispatch(removeCart(cartId)))
)


