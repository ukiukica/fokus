import React from "react";
import { useSelector } from "react-redux";

import './CameraListItem.css'
import '../../context/Misc.css'

function CameraListItem({ cameraId }) {

    // const sessionUser = useSelector((state) => state.session?.user);
    const cameras = useSelector((state) => state.cameras)
    const users = useSelector((state) => state.users)


    const currentCamera = cameras[cameraId]
    const cameraUser = users[currentCamera.user_id]
    const productImagesArr = currentCamera.images.filter(image => image.film_roll === false)

    return (
        <div id='cam-item'>
            <div className='cam-item-img-div'>
            <img className='cam-item-img' src={currentCamera?.images[0]?.image_url} />
            </div>
            <div className='cam-item-img-div-2'>
            <img className='cam-item-img' src={currentCamera?.images[1]?.image_url} />
            </div>
            <div id='cam-item-details'>
            <p id="cam-item-name">{`${currentCamera.brand} ${currentCamera.model}`}</p>
            <p className='cam-item-amount'>${currentCamera.amount}</p>
            </div>
        </div>
    )
}

export default CameraListItem;
