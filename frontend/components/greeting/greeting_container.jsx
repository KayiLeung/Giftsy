import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_action';
import { logout } from '../../actions/session_actions';


import Greeting from './greeting';

const mapStateToProps = ({ session }) => ({
    currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => {
    // debugger
    return {

        logout: () => dispatch(logout()),
        openModal: modal => dispatch(openModal(modal))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);
