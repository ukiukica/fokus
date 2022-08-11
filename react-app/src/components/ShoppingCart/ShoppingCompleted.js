import React from "react";
import { NavLink } from "react-router-dom";

import dogWithCamera from "./dog-with-camera2.png"

import "./ShoppingCart.css"


function ShoppingCompleted () {

    return (
        <div id="thank-you-div">
            <p id="thank-you-p">Thank you for your purchase! <br/> Go take some photos!</p>
            <img id="dog-camera" src={dogWithCamera} alt="Dog Holding Camera"/>
            <div id="orders-link">
            <p>To see your orders,</p>
            <NavLink to="/orders" style={{ color: '#ba3742'}}>click here.</NavLink>
            </div>
        </div>
    )
}

export default ShoppingCompleted;
