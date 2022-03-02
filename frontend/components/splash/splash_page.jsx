import React from 'react';
import { MdLogin } from 'react-icons/io5';
// import { Link } from 'react-router-dom';
// import NavigrationBar from '../nav_bar/nav_bar';

const Splash = ({ currentUser, logout , openModal}) => {
    const sessionLinks = () => (
        <header className='session'>
            <h1 id='logo'>Giftsy</h1>
            <button className="session-button" onClick={() => openModal('signup')}>Sign In</button>
            <h2 className="greeting">Hello!</h2>
        </header>
    );
    const personalGreeting = () => (
        <header className='session'>
            <h1 id='logo'>Giftsy</h1>
            <button className="session-button" onClick={logout}>Log Out</button>
            <h2 className="greeting">Welcome back, {currentUser.fname}!</h2>
        </header>
    );


        return (
        <section>
            <div>
                
            </div>
            {currentUser ? (
                <div>
                    {personalGreeting(currentUser, logout)}
                </div>
            ) : (
                <div>
                    {sessionLinks()}
                </div>
            )}
        </section>
    )
};


export default Splash;