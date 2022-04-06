import { RECEIVERATINGS, RECEIVERATING, DELETERATING} from '../actions/rating_action'

const ratingReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVERATINGS:
            return action.ratings

        case RECEIVERATING:
            nextState[action.rating.id] = action.rating;
            return nextState;

        case DELETERATING:
            delete nextState[action.ratingId];
            return nextState
            
        default:
            return state
    }
}

export default ratingReducer;