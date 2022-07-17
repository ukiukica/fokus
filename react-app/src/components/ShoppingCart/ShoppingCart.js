import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

import { getCameras, editCamera } from "../../store/cameras";
import emptyCartPic from "./dog-with-cart2.png"

import "./ShoppingCart.css"

function ShoppingCart() {

    const history = useHistory();
    const dispatch = useDispatch();

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

    const increaseInventory = async (cameraId) => {
        const payload = {
            "brand": cameras[cameraId]?.brand,
            "model": cameras[cameraId]?.model,
            "film_type": cameras[cameraId]?.film_type,
            "other_specs": cameras[cameraId]?.other_specs,
            "amount": cameras[cameraId]?.amount,
            "inventory": cameras[cameraId]?.inventory + 1,
            "category_id": cameras[cameraId]?.category_id,
            "user_id": cameras[cameraId]?.user_id
        }
        console.log("ABOUT TO DISPATCH")
        await dispatch(editCamera(payload, cameraId))
        await dispatch(getCameras())
        console.log("DISPATCHED")
    }

    const removeFromCart = (e, cameraId) => {
        e.preventDefault()
        const updateSessionCameras = sessionCameras?.filter(camera => camera !== cameraId).join()
        if (updateSessionCameras) {
            sessionStorage.setItem(`${sessionUser.id}`, updateSessionCameras)
            increaseInventory(cameraId)

        }
        else {
            sessionStorage.removeItem(`${sessionUser.id}`)
            increaseInventory(cameraId)
        }
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
                    <div id="cart">
                        <h2 id="cart-title">Your Cart</h2>
                        {sessionCameras?.map((camera) => (
                            <div id='cart-item'>
                                <div id="remove-btn-img-div">
                                    <button onClick={(e) => removeFromCart(e, camera)} className="remove-btn cart-btn">x</button>
                                    <img id="cart-item-img" src={cameras[camera]?.images[0].image_url} />
                                </div>
                                <p>{cameras[camera]?.brand} {cameras[camera]?.model}</p>
                                <p>${cameras[camera]?.amount}</p>
                            </div>
                        ))}
                        <div id="total-div">
                            <p id="total">Total: ${total}</p>
                        </div>
                        <button className="post checkout" onClick={(e) => emptyCart(e)}>Checkout</button>
                    </div>
                </>
                :
                <div id="empty-cart-div">
                    <p id="cart-empty-p">Your cart is empty. <br/>Do some shopping!</p>
                    <img id="empty-cart-img" src={emptyCartPic} />
                </div>
            }
        </>
    )
}

export default ShoppingCart;
