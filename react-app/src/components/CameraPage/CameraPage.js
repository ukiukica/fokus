import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import './CameraPage.css'

function CameraPage() {

    const sessionUser = useSelector((state) => state.session?.user);
    const cameras = useSelector((state) => state.cameras)

    const camerasArr = Object.values(cameras)

    return (
        <>
            <div>
                {camerasArr.map((camera) => (
                    <div key={camera.id}>
                        {/* <img src={camera.image_url} /> */}
                        <p>Brand: {camera.brand}</p>
                        <p>Model: {camera.model}</p>
                        <p>Film Type: {camera.film_type}</p>
                        <p>{camera.other_specs}</p>
                        <p>Amount: {camera.amount}</p>
                        <p>Inventory: {camera.inventory}</p>
                        <p>Posted on: {camera.created_at}</p>
                        <p>Sold by: {camera.user_id}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
