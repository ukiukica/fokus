import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import './SplashPage.css'

function SplashPage() {
    const sessionUser = useSelector((state) => state.session?.user);

    return (
        <div id='splash-body'>
            <img id='splash-image' src='/SplashPage3.jpg' />
            <div id='shop-now-div'>
            <Link to="/cameras">
                <button id='shop-now-btn'>Shop Now</button>
            </Link>
            </div>

        </div>
    )
}

export default SplashPage
