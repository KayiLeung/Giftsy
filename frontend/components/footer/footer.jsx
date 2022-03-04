import React from "react";
import { IoAccessibilitySharp } from "react-icons/io5";
// import { FaGithub} from 'react-icon/fa'


const Footer = () => { 
    
    
    
    return (
        <footer >
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
                            <li><a href="#">Git</a></li>
                            <li><a href="#">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )

}

export default Footer