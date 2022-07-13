import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useParams } from "react-router-dom";
import { getCameras } from "../../store/cameras"

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
            {productImagesArr?.map((image) => (
                <div key={image.id} className="existing-img-item">
                    <img src={image.image_url} alt="" width="100" />
                    <button className="remove-btn" onClick={(e) => onClick(e, image.id)}>x</button>
                </div>
            ))}
        </>
    )

}

export default ExistingImages;
