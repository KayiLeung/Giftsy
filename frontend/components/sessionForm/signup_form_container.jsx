import React from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";


// const mSTP = ({errors}) => ({
//     errors: errors.session,
//     formType: 'signup',
//     navLink: <Link to="/login">log in here!</Link>
// })
const mSTP = state => ({
    formType: 'signup',
    navLink: <Link to="/login">log in here!</Link>
})



const mDTP = dispatch => ({
    action: user => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SessionForm)