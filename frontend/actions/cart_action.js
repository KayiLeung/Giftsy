import * as CartApiUtil from '../util/cart_api_util'

export const RECEIVECART = 'RECEIVECART'
export const DELETECART = 'DELETECART'

export const receiveCart = (cart) => ({
    type: RECEIVECART,
    cart
})

export const removeCart = (userId, cartId) => ({
    type: DELETECART,
    cartId
})

export const fetchCart = cartId => dispatch => (
    CartApiUtil.fetchCart()
    .then(cart => dispatch(receiveCart(cart)))
)

export const createCart = (userId, cart) => dispatch => {
    return (
        CartApiUtil.createCart(userId, cart)
        .then((cart) => {
            return (dispatch(receiveCart(cart)))
        })
    )
}

export const deleteCart = (cartId) => dispatch => (
    CartApiUtil.deleteCart(cartId)
    .then(() => dispatch(removeCart(cartId)))
)