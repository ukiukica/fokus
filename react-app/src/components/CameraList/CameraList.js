import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import AddCameraModal from "../AddCamera/AddCameraModal";
import './CameraList.css'

function CameraList() {

    const sessionUser = useSelector((state) => state.session?.user);
    const cameras = useSelector((state) => state.cameras)
    const images = useSelector((state) => state.images)

    const camerasArr = Object.values(cameras)
    const imagesArr = Object.values(images)

    console.log("THIS IS IMAGES ARRAY", imagesArr)

    return (
        <>
            <h1>All Cameras</h1>

            {sessionUser &&
                <AddCameraModal />
            }

            <div>
                {imagesArr.map((image) => (
                    <div key={image[0].id}>
                        {image[0].film_roll === false && (
                            <>
                                <img className='camera-list-pic' src={image[0].image_url} />
                                <p>{`${image[0].camera.brand} ${image[0].camera.model}`}</p>
                                <p>{`$${image[0].camera.amount}`}</p>
                            </>

                        )}
                    </div>
                ))}
            </div>
        </>
    )
}

export default CameraList
