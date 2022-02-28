import { connect } from 'react-redux'
import { closeModal, openModal } from '../../actions/modal'
import { login } from '../../actions/session_actions'
import LoginForm  from './login_form'

const mSTP = (state, ownProps) => {
    return ({
        formType: 'login',
        errors: Object.values(state.errors)
    })
}

const mDTP = dispatch => {
    return {
        action: (user) => dispatch(login(user)),
        otherForm: (
            <button onClick={ () => dispatch(openModal('signup'))}>
                signup
            </button>
        ),
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(LoginForm)