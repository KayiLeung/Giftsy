import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { closeModal, openModal } from '../../actions/modal_action';
import { login } from '../../actions/session_actions'
import SessionForm from './session_form';
import { clearErrors } from '../../actions/errors_action';

const mSTP = (state) => ({
    errors: Object.values(state.errors.sessionErrors),
    formType: 'login',
});

const mDTP = dispatch => {
    return {
        action: (user) => dispatch(login(user)),
        otherForm: (
            <button className="session-button" onClick={() => dispatch(openModal('signup'))}>
                Sign-up
            </button>
        ),
        closeModal : () => dispatch(closeModal()),
        clearErrors: () => dispatch(clearErrors()),
    };
};

export default connect(mSTP, mDTP)(SessionForm)