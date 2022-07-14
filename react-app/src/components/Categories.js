import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import './NavBar.css'

function Categories() {

    return (
        <div id="categ-body">
            <div id='categ-btn-div'>
                <button className='categ-btn'>All</button>
                <button className='categ-btn'>SLR</button>
                <button className='categ-btn'>TLR</button>
                <button className='categ-btn'>Rangefinder</button>
                <button className='categ-btn'>Point-and-Shoot</button>
                <button className='categ-btn'>Instant</button>
                <button className='categ-btn'>Folding</button>
            </div>
        </div>
    )
}

export default Categories;
