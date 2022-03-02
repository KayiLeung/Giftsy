import { connect } from 'react-redux';
import { setModalToOpen } from '../../actions/modal_action';
import { logout } from '../../actions/session_actions';
import { NavigrationBar } from './nav_bar'

const mSTP = (state) => {
    return ({
        currentUser: state.session.currentUser,
        userId: state.session.id,
    })
}

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    setModalToOpen : () => dispatch(setModalToOpen())
})

export default connect(mSTP, mDTP)(NavigrationBar)