import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { openModal, setModalToOpen } from '../../actions/modal_action';
import { logout } from '../../actions/session_actions';
import Splash from './splash_page';


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

export default connect(mSTP, mDTP)(Splash);