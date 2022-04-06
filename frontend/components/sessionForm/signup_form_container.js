import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { clearErrors } from '../../actions/errors_action';
import { openModal, closeModal } from '../../actions/modal_action';
import { signup } from '../../actions/session_actions'
// import {createCart} from '../../actions/cart_action'
import SessionForm from './session_form';


const mSTP = (state) => ({
    errors: Object.values(state.errors.sessionErrors),
    formType: 'signup',
    
});

const mDTP = dispatch => {
    return {
        action: (user) => dispatch(signup(user)),
        otherForm: (
            <button className="session-button" onClick={() => dispatch(openModal('login'))}>
                Login
            </button>
        ),
        closeModal: () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors()),
    };
};

export default connect(mSTP, mDTP)(SessionForm)