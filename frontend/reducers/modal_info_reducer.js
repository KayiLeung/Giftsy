import { GIVE_CART_ID, GIVE_RATING_ID } from '../actions/modal_info_action';

const ModalPostInfoReducer = (state = null, action) => {
    Object.freeze(state);

    switch (action.type) {
        case GIVE_RATING_ID :
            return action.ratingId;

        case GIVE_CART_ID :
            return action.cartId
        default:
            return state;
    }
}

export default ModalPostInfoReducer;