import { connect } from 'react-redux'
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
    };
};

export default connect(mSTP, mDTP)(SignupForm)