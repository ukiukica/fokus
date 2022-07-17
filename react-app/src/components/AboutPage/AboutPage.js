import React from "react";

import gitHub from "./GitHub-Emblem.png"
import linkedIn from "./LinkedIn_logo_initials.png"
import ukiHeadshot from "./Uki_Headshot_1.jpg"

import './AboutPage.css'

function AboutPage () {
    return (
        <div id='about-div'>
            <h1 id='about-h1'>About Developer</h1>
            <div id='img-bio-div'>
                <img id='dev-pic' src={ukiHeadshot} />
                <p id='about-p'>Uki Pavlovic is a New York-based director, producer, and actor. As of 2022, he is also an aspiring software engineer.
                <br></br>
                Born and raised Serbian, but in his heart he is what would be considered a naturalized New Yorker.
                <br></br>
                His favorite food is burek, a filo dough pie with cheese and meat.
                <br></br>
                You can find Uki sipping beer at a local bar talking too much about Europe.
                </p>
            </div>
            <h3 id='about-h3'>Find Uki on</h3>
            <div id='social-links'>
                <a href='https://github.com/ukiukica'>
                    <img id='github-logo' src={gitHub} />
                </a>
                <a href='https://www.linkedin.com/in/ukipavlovic/'>
                    <img id='linkedin-logo' src={linkedIn} />
                </a>
            </div>
        </div>
    )
}

export default AboutPage
