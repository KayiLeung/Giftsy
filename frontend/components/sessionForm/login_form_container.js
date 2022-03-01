import { connect } from 'react-redux'
// import { closeModal, openModal } from '../../actions/modal_action'
import { login } from '../../actions/session_actions'
import LoginForm  from './login_form'

const mSTP = ({ errors, session }) => ({
    session,
    errors: errors.session,
    formType: 'Sign in'
});

const mDTP = dispatch => {
    return {
        action: (user) => dispatch(login(user)),
        // otherForm: (
        //     <button onClick={ () => dispatch(openModal('signup'))}>
        //         signup
        //     </button>
        // ),
        // closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(LoginForm)