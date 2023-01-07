import React from "react";
import image from '../images/SOS.jpeg';
import Nav from './Nav';
import logo from '../images/Chiney-Whiney.png';

export default function Events() {
    return (
        <div>
            <header>
                <img src={logo} alt='Logo' id='logo'/>
                <Nav/>
            </header>
            <div id='event-container'>
                <a href="https://www.eventbrite.com/e/sos-save-our-soca-socacize-social-tickets-498534448957">
                    <img src={image} alt='SOS Event' className='event-image'/>
                </a>
                <a href="https://www.eventbrite.com/e/sos-save-our-soca-socacize-social-tickets-498534448957">
                    <button className="buy-ticket">BUY TICKETS</button>
                </a>
            </div>
        </div>
    )
}