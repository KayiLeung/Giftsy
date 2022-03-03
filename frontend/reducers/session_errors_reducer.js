import { CLEAR_ERRORS, RECEIVE_ERRORS } from '../actions/errors_action';


export default (state = [], action) => {
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};
