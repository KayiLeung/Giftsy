import { connect } from 'react-redux'
import { closeModal, openModal } from '../../actions/modal'
import { signup } from '../../actions/session_actions'
import SignupForm from './signup_form'


const mSTP = (state) => {
    return ({
        formType: 'signup',
        errors: Object.values(state.errors)
    })
}

const mDTP = dispatch => {
    return {
        action: (user) => dispatch(signup(user)),
        otherForm: (
            <button onClick={() => dispatch(openModal('login'))}>
                Login
            </button>
        ),
        closeModal: () => dispatch(closeModal)
    };
};

export default connect(mSTP, mDTP)(SignupForm)