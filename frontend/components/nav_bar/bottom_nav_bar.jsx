import React from "react";


const BottomNavBar = () => {


    return (
        <div className='nav-bar'>
            <ul className='bottom-nav'>
                    <li className='nav-buttons'>
                        <button className='nav-categroy'>New Born</button>
                        <button className='nav-categroy'>Birthday</button>
                        <button className='nav-categroy'>Wedding</button>
                        <button className='nav-categroy'>Anniversary</button>
                    </li>
            </ul>
        </div>
    )
}

export default BottomNavBar