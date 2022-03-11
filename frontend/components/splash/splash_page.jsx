import React from 'react';
import Search from '../search/search'
import { Link } from 'react-router-dom';
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
                            <Search />
                            <li className='nav-buttons'>
                                <a href="https://www.linkedin.com/in/ka-yi-leung-9b0687a3/"><button className='nav-contact-button'>< FaLinkedinIn /></button></a>
                                <a href="https://github.com/KayiLeung?tab=repositories"><button className='nav-contact-button'>< FaGithub /></button></a>
                                <a href=""><button className='nav-contact-button'><FaShoppingCart/></button></a>
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