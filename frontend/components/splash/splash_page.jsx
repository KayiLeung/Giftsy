import React from 'react';
import SearchContainer from '../search/search_container'
import { Link, Redirect } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaShoppingCart} from 'react-icons/fa';

const Splash = ({ currentUser, logout, openModal}) => {


    const signIn = (e) => {
        openModal('login')
    }

    return (
            <div>
                <header>
                <div className='nav-bar'>
                    <ul className='top-nav'>
                        <div className='nav-side'>
                            <Link to="/" ><p className='giftsy'>Giftsy</p></Link>
                            <SearchContainer/>
                            <li className='nav-buttons'>
                                <a href="https://www.linkedin.com/in/ka-yi-leung-9b0687a3/" target='_blank'><button className='nav-contact-button'>< FaLinkedinIn /></button></a>
                                <a href="https://github.com/KayiLeung?tab=repositories" target='_blank'><button className='nav-contact-button'>< FaGithub /></button></a>
                                {currentUser ? 
                                    (<Link to='/carts'><a href=""><button className='nav-contact-button'><FaShoppingCart /></button></a></Link>) : 
                                    (<button className='nav-contact-button' onClick={() => signIn()}><FaShoppingCart /></button>)
                                }
                                {currentUser ? (<button className="nav-contact-button" onClick={logout}>Log Out</button>) :
                               ( <button className="nav-contact-button" onClick={() => signIn()}>Sign In</button>)
                            }
                            </li>
                        </div>
                    </ul>
                </div>
                </header>
                <main></main>
            </div>
        

    )
};


export default Splash;