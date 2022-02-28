import { connect } from 'react-redux';
import { openModal } from '../../actions/modal';
import { logout } from '../../actions/session_actions';
import Splash from './splash_page';


const mSTP = ({ session, entities: { users } }) => ({
        currentUser: users[session.id]
});
const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mSTP, mDTP)(Splash)