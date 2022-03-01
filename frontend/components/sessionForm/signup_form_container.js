import { connect } from 'react-redux'
// import { closeModal , openModal} from '../../actions/modal_action'
import { signup } from '../../actions/session_actions'
import SignupForm from './signup_form'


const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign up'
});

const mDTP = dispatch => {
    return {
        action: (user) => dispatch(signup(user)),
        // otherForm: (
        //     <button onClick={() => dispatch(openModal('login'))}>
        //         Login
        //     </button>
        // ),
        // closeModal: () => dispatch(closeModal)
    };
};

export default connect(mSTP, mDTP)(SignupForm)