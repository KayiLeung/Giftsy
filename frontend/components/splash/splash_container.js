import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_action';
import { logout } from '../../actions/session_actions';
import Splash from './splash_page';


const mSTP = ({ session, entities: { users } }) => ({
        currentUser: users[session.id]
});

// const mSTP = ({ session }) => ({
//     currentUser: session.currentUser
// });
const mDTP = dispatch => ({
    // openModal: modal => dispatch(openModal(modal)),
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(Splash)