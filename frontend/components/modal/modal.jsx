import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_action';
import LoginFormContainer from '../sessionForm/login_form_container'
import SignupFormContainer from '../sessionForm/signup_form_container'
import EditRatingContainer from '../rating/rating_edit_submit_container'

function Modal({ modal , closeModal, signupForm, loginForm }) {
    if (!modal) {
        return null;
    }
    let component, otherForm;
    switch (modal) {
        case 'login':
            otherForm = signupForm;
            component = <LoginFormContainer />;
            break;
        case 'signup':
            otherForm = loginForm
            component = <SignupFormContainer />;
            break;
        case 'edit':
            component = <EditRatingContainer />
            break;
        default:
            return null;
    }
    return (
        <div className='modal-content '>

            <div className="modal-background " onClick={closeModal}>
                <div className="modal-child" onClick={e => e.stopPropagation()}>
                    {component}
                </div>
            </div>
        </div>
        
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };

};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);