import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useParams } from "react-router-dom";
import EditCameraModal from "../EditCamera/EditCameraModal"
import './CameraPage.css'

function CameraPage() {

    const params = useParams();

    const sessionUser = useSelector((state) => state.session?.user);
    const cameras = useSelector((state) => state.cameras)

    const { cameraId } = params;

    const currentCamera = cameras[cameraId]
    const productImagesArr = currentCamera?.images.filter(image => image.film_roll === false)
    // console.log("PROD IMAGES ARR: ", productImagesArr)
    return (
        <>
            {productImagesArr && (
                <div>
                    <div key={currentCamera.id}>
                        <img src={productImagesArr[0]?.image_url} />
                        <p>Brand: {currentCamera.brand}</p>
                        <p>Model: {currentCamera.model}</p>
                        <p>Film Type: {currentCamera.film_type}</p>
                        <p>{currentCamera.other_specs}</p>
                        <p>Amount: {currentCamera.amount}</p>
                        <p>Inventory: {currentCamera.inventory}</p>
                        <p>Posted on: {currentCamera.created_at}</p>
                        <p>Sold by: {currentCamera?.user_id}</p>
                    </div>
                    {currentCamera?.user_id === sessionUser?.id && (
                        <EditCameraModal currentCamera={currentCamera}/>
                    )}
                </div>
            )}
        </>
    )
}

export default CameraPage;
