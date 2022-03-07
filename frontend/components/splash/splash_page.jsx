import React from 'react';
import SearchBar from '../search/search_bar'
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaShoppingCart} from 'react-icons/fa';

const Splash = ({ currentUser, logout, openModal}) => {


    const signIn = (e) => {
        openModal('login')
    }




    return (
        <header>
            <div>
                <div className='nav-bar'>
                    <ul className='top-nav'>
                        <div className='nav-side'>
                            {/* <button onClick={()=>index()}><h1 className='giftsy'>Giftsy</h1></button> */}
                            <Link to="/" ><p className='giftsy'>Giftsy</p></Link>
                            <li className='nav-searchbar'><SearchBar /></li>
                            <li className='nav-buttons'>
                                <a href=""><button className='nav-contact-button'>< FaLinkedinIn /></button></a>
                                <a href=""><button className='nav-contact-button'>< FaGithub /></button></a>
                                <a href=""><button className='nav-contact-button'><FaShoppingCart/></button></a>
                                {currentUser ? (<button className="nav-contact-button" onClick={logout}>Log Out</button>) :
                               ( <button className="nav-contact-button" onClick={() => signIn()}>Sign In</button>)
                            }
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </header>


    )
};


export default Splash;