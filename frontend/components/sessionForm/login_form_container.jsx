import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../util/session_api_util";
import SessionForm from './session_form'

// const mSTP = ({errors}) => ({
//     errors: errors.session,
//     formType: 'login',
//     navLink: <Link to="/signup">Not a user?Sign up here!</Link>
// })
const mSTP = state => ({
    formType: 'login',
    navLink: <Link to="/signup">Not a user?Sign up here!</Link>
})



const mDTP = dispatch => ({
    action: user => dispatch(login(user))
})

export default connect(mSTP, mDTP)(SessionForm)