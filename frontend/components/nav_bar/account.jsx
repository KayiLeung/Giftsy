import React from 'react';
import { Link } from 'react-router-dom';

const UserAccount = ({ currentUser, logout, setModalToOpen }) => {
    const display = currentUser ? (
        <div>
            <p>Hello, {currentUser.fname}</p>
            <button onClick={logout}>Log out</button>
        </div>
    ) : (
        <div>
            <h1>Hello!</h1>
                <button onClick={() => setModalToOpen()}> signin </button>
            {/* <Link className="signin-link" onClick={() => setModalToOpen()} to="/login" >Sign-In</Link> */}
                {/* &nbsp;or&nbsp;
            <Link to="/signup">Register</Link> */}
        </div>
    );


    return (
        <div>
            {display}
        </div>
    )
}



export default UserAccount