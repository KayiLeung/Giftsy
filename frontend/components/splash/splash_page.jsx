import React from 'react';
import Footer from '../footer/footer';
// import { MdLogin } from 'react-icons/io5';
import BottomNavBar from '../nav_bar/bottom_nav_bar';
import SearchBar from '../nav_bar/search_bar';

const Splash = ({ currentUser, logout, openModal }) => {
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
        <div>
            {/* <button className="nav-buttons" onClick={logout}>Log Out</button> */}
            <h2 className="greeting">Welcome back, {currentUser.fname}!</h2>
        </div>
    );

    const signIn = (e) => {
        openModal('login')
    }


    return (
        <header>
            <div>
                <div className='nav-bar'>
                    <ul className='top-nav'>
                        <div className='nav-side'>
                            <li className="nav-side"><h2 className='giftsy'>Giftsy</h2></li>
                            <li className='nav-searchbar'><SearchBar /></li>
                            <li className='nav-buttons'>
                                <a href=""><button className='nav-contact-button'>Linkedin</button></a>
                                <a href=""><button className='nav-contact-button'>Github</button></a>
                                <a href=""><button className='nav-contact-button'>Cart</button></a>
                                {currentUser ? (<button className="nav-contact-button" onClick={logout}>Log Out</button>) :
                               ( <button className="nav-contact-button" onClick={() => signIn()}>Sign In</button>)
                            }
                            </li>
                        </div>
                    </ul>
                    <BottomNavBar />
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
        </header>


    )
};


export default Splash;