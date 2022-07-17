import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Redirect } from "react-router-dom";

import dogWithCamera from "./dog-with-camera2.png"

import "./ShoppingCart.css"


function ShoppingCompleted () {

    return (
        <div id="thank-you-div">
            <p id="thank-you-p">Thank you for your purchase! <br/> Go take some photos!</p>
            <img id="dog-camera" src={dogWithCamera} />
        </div>
    )
}

export default ShoppingCompleted;
