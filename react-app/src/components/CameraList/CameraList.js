// import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import CameraListItem from "../CameraListItem/CameraListItem";

import './CameraList.css'

function CameraList() {

    // const sessionUser = useSelector((state) => state.session?.user);
    const cameras = useSelector((state) => state.cameras)

    const camerasArr = Object.values(cameras)


    return (
        <>
            <div className="cam-items-list-body">
            <div className='cam-items-list'>
                {camerasArr.map((camera) => (
                    <NavLink to={`/cameras/${camera.id}`} key={camera.id} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <CameraListItem key={camera.id} cameraId={camera.id} />
                    </NavLink>
                ))}
            </div>
            </div>
        </>
    )
}

export default CameraList
