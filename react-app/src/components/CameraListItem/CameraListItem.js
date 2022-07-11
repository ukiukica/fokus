import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import './CameraListItem.css'

function CameraListItem({ cameraId }) {

    // const sessionUser = useSelector((state) => state.session?.user);
    const cameras = useSelector((state) => state.cameras)
    const users = useSelector((state) => state.users)
    console.log("CAMERAS FROM STATE: ", cameras)

    const currentCamera = cameras[cameraId]
    const cameraUser = users[currentCamera.user_id]
    const productImagesArr = currentCamera.images.filter(image => image.film_roll === false)
    console.log("PRODUCT IMAGES ARRAY: ", productImagesArr)


    return (
        <>
            <img className='camera-list-pic' src={productImagesArr[0]?.image_url} />
            <p>Brand: {currentCamera.brand}</p>
            <p>Model: {currentCamera.model}</p>
            <p>Film Type: {currentCamera.film_type}</p>
            <p>Category: {currentCamera.category.name}</p>
            <p>{currentCamera.other_specs}</p>
            <p>Amount: {currentCamera.amount}</p>
            <p>Inventory: {currentCamera.inventory}</p>
            <p>Posted on: {currentCamera.created_at}</p>
            <p>Sold by: {cameraUser?.username}</p>
            <br/>
        </>
    )
}

export default CameraListItem;
