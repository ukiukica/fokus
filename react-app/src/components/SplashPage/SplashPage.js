import React from "react";

import { Link } from "react-router-dom";

import splashPic from "./SplashPage3.jpg"

import './SplashPage.css'
import '../NavBar.css'
import '../../context/Buttons.css'
import '../../context/Misc.css'

function SplashPage() {


    // const sessionUser = useSelector((state) => state.session?.user);

    return (
        <div id='splash-body'>
            <img id='splash-image' src={splashPic} alt="Fokus"/>
            <div id='shop-now-div'>
            <Link to="/cameras">
                <button id='shop-now-btn'>Shop Now</button>
            </Link>
            </div>

        </div>
    )
}

export default SplashPage
