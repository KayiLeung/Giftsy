import React from 'react';

const NavigrationBar = ({ currentUser, logout, openModal }) => {
    const sessionLinks = () => (
        <>
            {/* <button className="nav-side" onClick={() => openModal('login')}>Sign In</button> */}
            <div className='nav-buttons'>
                <h2 className="greeting">
                    Find things you'll love. Support independent sellers. Only on Giftsy.
                </h2>
            </div>
        </>

    );
    const personalGreeting = () => (
        <header className='session-logo'>
            <h1 id='logo'>Giftsy</h1>
            <button className="session-button" onClick={logout}>Log Out</button>
            <h2 className="greeting">Welcome back, {currentUser.fname}!</h2>
        </header>
    );

    const signIn = (e) => {
        openModal('login')
    }


    return (
        <section>
            <div>
                <div className='nav-bar'>
                    <ul className='top-nav'>
                        <div className='nav-side'>
                            <li className="nav-side"><h2 className='giftsy'>Giftsy</h2></li>
                            <li className='nav-searchbar'><SearchBar /></li>
                            <li className='nav-buttons'>
                                <a href=""><button className='nav-contact-button'>Linkedin</button></a>
                                <a href=""><button className='nav-contact-button'>Github</button></a>
                                <a href=""><button className='nav-contact-button'>cart</button></a>
                                <button className="nav-contact-button" onClick={() => signIn()}>Sign In</button>
                            </li>
                        </div>
                    </ul>
                </div>
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


export default NavigrationBar;