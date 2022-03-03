import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_action';
import { logout } from '../../actions/session_actions';
import NavigrationBar from './nav_bar'


const mSTP = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id]
    }
}


const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(mSTP, mDTP)(NavigrationBar);