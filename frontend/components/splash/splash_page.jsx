import React from 'react';
import { Link } from 'react-router-dom';



const Splash = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => {
        
        return (<hgroup className="header-group">
            <h2 className="greeting">Explore one-of-a-kind finds from independent makers</h2>
            <nav className="login-signup">
                <button onClick={() => openModal('login')} >login</button>
                <br />
                
                <button onClick={() => openModal('signup')}>signup</button>
            </nav>

        </hgroup>)
    };
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="greeting">Welcome back, {currentUser.fname}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );



    return (
        <section>
            <div>
            <h1 id='logo'>Giftsy</h1>
                
            </div>
            {currentUser ? (
                <div>
                    {personalGreeting()}
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