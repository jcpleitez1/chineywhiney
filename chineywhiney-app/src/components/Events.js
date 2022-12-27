import React from "react";
import image from '../images/SOS.jpeg';
import Nav from './Nav';

export default function Events() {
    return (
        <div>
            <header>
                <Nav/>
            </header>
            <div id='event-container'>
                <img src={image} alt='SOS Event' class='event-image'/>
            </div>
        </div>
    )
}