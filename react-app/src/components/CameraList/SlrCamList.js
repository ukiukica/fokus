// import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink} from "react-router-dom";

import CameraListItem from "../CameraListItem/CameraListItem";

import './CameraList.css'

function SlrCamList() {

    // const sessionUser = useSelector((state) => state.session?.user);
    const cameras = useSelector((state) => state.cameras)

    const camerasArr = Object.values(cameras)
    const slrCamsArr = camerasArr.filter(camera => camera.category.name === "Single-Lens Reflex (SLR)")

    return (
        <>
            <div className="cam-items-list-body">
            <div className='cam-items-list'>
                {slrCamsArr.map((camera) => (
                    <NavLink key={camera.id} to={`/cameras/${camera.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <CameraListItem cameraId={camera.id} />
                    </NavLink>
                ))}
            </div>
            </div>
        </>
    )
}

export default SlrCamList;
