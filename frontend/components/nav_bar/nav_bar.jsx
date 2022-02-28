import React from "react";
import { NavLink } from "react-router-dom";

const navBar = () => {
    return (
        <>
        <nav>
            <NavLink to='/'>
            <h1>logo</h1>
            </NavLink>
            <Bars/>    
            <NavMenu>
                <NavLink>search</NavLink>    
                <NavLink>sign in</NavLink>
                <NavLink>cart</NavLink>
                
            </NavMenu>  
        </nav>
        </>
    )
}

export default navBar