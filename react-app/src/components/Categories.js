import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import './NavBar.css'

function Categories() {

    return (
        <div id="categ-body">
            <div id='categ-btn-div'>
                <NavLink to="/cameras">
                    <button className='categ-btn'>All Cameras</button>
                </NavLink>

                <NavLink to='/cameras/slr-cameras'>
                    <button className='categ-btn'>SLR</button>
                </NavLink>

                <NavLink to='/cameras/tlr-cameras'>
                    <button className='categ-btn'>TLR</button>
                </NavLink>

                <NavLink to='/cameras/rangefinder-cameras'>
                    <button className='categ-btn'>Rangefinder</button>
                </NavLink>

                <NavLink to='/cameras/point-and-shoot-cameras'>
                    <button className='categ-btn'>Point-and-Shoot</button>
                </NavLink>

                <NavLink to='/cameras/instant-cameras'>
                    <button className='categ-btn'>Instant</button>
                </NavLink>

                <NavLink to='/cameras/folding-cameras'>
                    <button className='categ-btn'>Folding</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Categories;
