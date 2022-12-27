import React from "react";
import image from '../images/AboutMeImage.jpeg';
import video from '../videos/Landing.mov';
import Nav from './Nav';

export default function AboutMe() {
    return (
        <div>
            <header>
                <video src={video} alt='Landing Video' autoPlay loop muted playsInline/>
                <Nav/>
            </header>
            <h1>Chiney Whiney</h1>
            <img src={image} alt='About Me' id='about-me-image'/>
            <h2>About Me</h2>
            <div>
                <p>
                Welcome fellow sojourner! Crystal Chu-A-Kong aka Chiney Whiney, is a first generation Guyanese-American, lover of movement, melodies, entrepreneurism and togetherness. Licensed NYS Realtor by day, and Socacize dance fitness instructor by night, Chiney enjoys reconnecting with nature and values movement through dance when she’s not hosting an open house or screaming “KEEP GOING/LOWER” in her fitness class. Chiney Whiney is your neighborhood realtor, dancer, leader and confidant. She uses her psychological and sociological educational background to better serve each community she handpicked to be part of. Chiney Whiney aka Guru - real estate consultant, connoisseur of dance/entertainment, ally and spreader of light asks you:
                </p>
                <p>
                Are you ready to make magic together.
                </p>
            </div>
        </div>
    )
}