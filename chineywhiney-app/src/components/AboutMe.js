import React from "react";
import image from '../images/AboutMeImage.jpeg';
import video from '../videos/Landing.mov';
import Nav from './Nav';
import logo from '../images/Chiney-Whiney.png';

export default function AboutMe() {
    return (
        <div>
            <header>
                <img src={logo} alt='Logo' id='logo'/>
                <video src={video} alt='Landing Video' autoPlay loop muted playsInline/>
                <Nav/>
            </header>
            <h2>About Me</h2>
            <img src={image} alt='About Me' id='about-me-image'/>
            <div>
                <p>
                Welcome fellow sojourner!
                </p>

                <p className="name">
                Crystal Chu-A-Kong
                </p>

                <p>
                aka Chiney Whiney, is a first generation Guyanese-American, lover of movement, melodies, entrepreneurism and togetherness. Licensed NYS Realtor by day, and Socacize dance fitness instructor by night, Chiney enjoys reconnecting with nature and values movement through dance when she’s not hosting an open house or screaming “KEEP GOING/LOWER” in her fitness class. Chiney Whiney is your neighborhood realtor, dancer, leader and confidant. She uses her psychological and sociological educational background to better serve each community she's handpicked to be part of. Chiney Whiney - real estate consultant, connoisseur of dance/entertainment, ally and spreader of light proposes:
                </p>

                <p className="tagline">
                Let's create a community you've always wanted
                </p>
            </div>
        </div>
    )
}