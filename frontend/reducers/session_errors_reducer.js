import { CLEAR_ERRORS, RECEIVE_ERRORS } from '../actions/errors_action';
import { CLOSE_MODAL } from '../actions/modal_action';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
 

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        case RECEIVE_CURRENT_USER:
            return [];
        case CLOSE_MODAL:
            return [];
        default:
            return state;
    }
};
