import React from "react";
import { IoAccessibilitySharp } from "react-icons/io5";
import { FaGithub, FaLinkedin} from 'react-icons/fa'


const Footer = () => { 
    
    
    
    return (
        <footer className='footer-container'>
            <hr className='footer-line'/>
            <div className='footer-light-blue'>
                <p> </p>
                <div className='footer-blue'>
                    <p> </p>
                </div>
                <div className='footer-deep-blue'>
                    <div className='footer-left'>
                        <p>United States | English (US) | $(USD)</p>
                    </div>
                    <div className='footer-right'>
                        <ul>
                            <li>© 2022</li>
                            <a id='footer-icon' href="https://github.com/KayiLeung" target='_blank'><FaGithub /></a>
                            <a id='footer-icon' href="https://www.linkedin.com/in/ka-yi-leung-9b0687a3/" target='_blank'><FaLinkedin /></a>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer