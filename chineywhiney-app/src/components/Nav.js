import React from 'react'
import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <nav className="nav-bar">
            <div id='about-me-link'>
                <NavLink exact to={"/"} style={{ textDecoration: 'none', color:'#AC4425'}}>
                    About Me
                </NavLink>
            </div> 
            <div id='events-link'>
                <NavLink exact to={'/events'} style={{ textDecoration: 'none', color:'#AC4425' }}>
                    Events
                </NavLink>
            </div>
            <div id='contact-link'>
                <NavLink exact to={'/contact'} style={{ textDecoration: 'none', color:'#AC4425' }}>
                    Contact
                </NavLink>
            </div>
        </nav>
    )
}