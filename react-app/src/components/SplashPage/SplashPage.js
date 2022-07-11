import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import './SplashPage.css'

function SplashPage() {
    const sessionUser = useSelector((state) => state.session?.user);

    return (
        <div>
            <h1>Welcome to Fokus</h1>
            <Link to="/cameras">
                <button>Shop Now</button>
            </Link>
        </div>
    )
}

export default SplashPage
