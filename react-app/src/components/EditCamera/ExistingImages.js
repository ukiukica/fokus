import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useParams } from "react-router-dom";
import {getCameras} from "../../store/cameras"

function ExistingImages({ productImagesArr }) {

    const dispatch = useDispatch();

    const onClick = async (e, cameraId) => {
        e.preventDefault();

        const response = await fetch(`/api/images/${cameraId}`, {
            method: "DELETE",
        })

        if (response.ok) {
           await dispatch(getCameras())
        }
    }

    return (
        <>
            {productImagesArr.map((image) => (
                <>
                    <img src={image.image_url} alt="" width="100" />
                    <button onClick={(e) => onClick(e, image.id)}>Remove</button>
                </>
            ))}
        </>
    )

}

export default ExistingImages;
