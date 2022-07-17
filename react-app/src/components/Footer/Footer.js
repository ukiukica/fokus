import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import './Footer.css'

function Footer() {
    return (
        <div id='footer'>
            <Link id='footer-link' to='/about'>About Developer</Link>
            <div id='right-side-footer'>
            <h3 id='footer-h3'>Made with love for film by</h3>
            <span id='sunsick'>Sunsick Films, LLC</span>
            </div>
        </div>

    )
}

export default Footer
