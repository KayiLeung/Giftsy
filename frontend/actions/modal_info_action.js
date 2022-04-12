export const GIVE_RATING_ID = "GIVE_RATING_ID";
export const GIVE_CART_ID = "GIVE_CART_ID";

export const giveRatingId = ratingId => ({
    type: GIVE_RATING_ID,
    ratingId
})

export const giveCartId = cartId => ({
    type: GIVE_CART_ID,
    cartId
})