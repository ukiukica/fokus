import React from "react";

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
