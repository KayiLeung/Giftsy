import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_action';
import { fetchCategory} from '../../actions/catergory_action'
import Splash from './splash_page';


const mSTP = ({ session, entities: { users, categories } }, ownProps) => {
    // debugger
    return {
        currentUser: users[session.id],
    }
}


const mDTP = dispatch => {
    return {
        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal)),
    }
}

export default connect(mSTP, mDTP)(Splash);