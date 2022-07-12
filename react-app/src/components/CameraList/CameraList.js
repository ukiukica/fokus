import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Redirect } from "react-router-dom";
import AddCameraModal from "../AddCamera/AddCameraModal";
import CameraListItem from "../CameraListItem/CameraListItem";
import logo from "./fokus-logo.jpg"
import './CameraList.css'

function CameraList() {

    const sessionUser = useSelector((state) => state.session?.user);
    const cameras = useSelector((state) => state.cameras)

    const camerasArr = Object.values(cameras)


    return (
        <>
            <div id='logo-categ-div'>
                    <img id='logo' src={logo} />
                <div id='categ-btn-div'>
                    <button className='categ-btn'>SLR</button>
                    <button className='categ-btn'>TLR</button>
                    <button className='categ-btn'>Rangefinder</button>
                    <button className='categ-btn'>Point-and-Shoot</button>
                    <button className='categ-btn'>Instant</button>
                    <button className='categ-btn'>Folding</button>
                </div>
            </div>
            <div id="cam-items-list-body">
            <div id='cam-items-list'>
                {camerasArr.map((camera) => (
                    <NavLink to={`/cameras/${camera.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                        <CameraListItem key={camera.id} cameraId={camera.id} />
                    </NavLink>
                ))}
            </div>
            </div>
        </>
    )
}

export default CameraList
