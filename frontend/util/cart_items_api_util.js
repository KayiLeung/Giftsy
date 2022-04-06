export const fetchCartItems = (cartId) => (
    $.ajax({
        method: 'GET',
        url: `/api/carts/${cartId}/cartItems`
    })
);

export const fetchCartItem = (cartId, cartItemId) => (
    $.ajax({
        method: 'GET',
        url: `/api/carts/${cartId}/cartItems/${cartItemId}`
    })
);

export const createCartItem = (cartId, cartItem) => (
    $.ajax({
        method: 'POST',
        url: `/api/carts/${cartId}/cartItems`,
        data: { cartItem }
    })
);

export const updateCartItem = (cartId, cartItem) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/carts/${cartId}/cartItems/${cartItem.id}`,
        data: { cartItem }
    })
);

export const deleteCartItem = (cartId, cartItemId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/carts/${cartId}/cartItems/${cartItemId}`
    })
);