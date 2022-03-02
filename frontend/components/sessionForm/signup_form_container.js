import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_action';
import { signup } from '../../actions/session_actions'
import SessionForm from './session_form';


const mSTP = (state) => ({
    errors: state.entities.errors,
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
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(SessionForm)