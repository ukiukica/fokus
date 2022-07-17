import React from "react";
import { useDispatch } from "react-redux";
import { getCameras } from "../../store/cameras"

function ExistingImages({ productImagesArr }) {

    const dispatch = useDispatch();

    const onClick = async (e, cameraId) => {
        e.preventDefault();
        if (productImagesArr.length > 1) {
            const response = await fetch(`/api/images/${cameraId}`, {
                method: "DELETE",
            })

            if (response.ok) {
                await dispatch(getCameras())
            }
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
