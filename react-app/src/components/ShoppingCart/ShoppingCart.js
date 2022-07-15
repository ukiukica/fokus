import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Redirect, useHistory } from "react-router-dom";


import "./ShoppingCart.css"

function ShoppingCart() {

    const history = useHistory();

    const sessionUser = useSelector((state) => state.session?.user);
    const cameras = useSelector((state) => state.cameras)
    console.log("CAMERAS: ", cameras)

    const sessionCameras = sessionStorage.getItem(`${sessionUser.id}`)?.split(",")
    console.log(sessionCameras)

    let total = 0;
    sessionCameras?.forEach((camera) => (
        total += cameras[camera]?.amount
    ))

    console.log(total)

    const emptyCart = (e) => {
        e.preventDefault()
        sessionStorage.removeItem(`${sessionUser.id}`)
        history.push('/checkout')
    }

    return (
        <>
            <div id="back-link-div">
                <i className="fa-solid fa-arrow-left"></i>
                <NavLink to='/cameras' style={{ color: 'inherit', textDecoration: 'inherit' }}
                > <button id="back-link">Back to Catalogue</button>
                </NavLink>
            </div>

            {sessionCameras ?
                <>
                    {sessionCameras?.map((camera) => (
                        <div>
                            <img id="cart-item-img" src={cameras[camera]?.images[0].image_url} />
                            <p>{cameras[camera]?.brand}</p>
                            <p>{cameras[camera]?.amount}</p>
                        </div>
                    ))}
                    <p>Total: ${total}</p>
                    <button onClick={(e) => emptyCart(e)}>Checkout</button>
                </>
                :
                <p>Your cart is empty.</p>
            }
        </>
    )
}

export default ShoppingCart;
