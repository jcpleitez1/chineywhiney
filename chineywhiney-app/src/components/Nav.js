import React from 'react'
import { NavLink } from "react-router-dom";

export default function Header() {

    return (
        <nav className="nav-bar">
            <div id='about-me-link'>
                <NavLink exact to={"/"} style={{ textDecoration: 'none', color:'#950101'}}>
                    About Me
                </NavLink>
            </div> 
            <div id='events-link'>
                <NavLink exact to={'/events'} style={{ textDecoration: 'none', color:'#950101' }}>
                    Events
                </NavLink>
            </div>
            <div id='posts-link'>
                <NavLink exact to={'/posts'} style={{ textDecoration: 'none', color:'#950101' }}>
                    Posts
                </NavLink>
            </div>
        </nav>
    )
}