import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, NavLink } from "react-router-dom";

import SignUpModal from "../auth/SignUpModal/SignUpModal";
import LoginModal from "../auth/LoginModal/LoginModal";
import LogoutButton from "../auth/LogoutButton";
import splashPic from "./SplashPage3.jpg"

import './SplashPage.css'
import '../NavBar.css'
import '../../context/Buttons.css'
import '../../context/Misc.css'

function SplashPage() {


    const sessionUser = useSelector((state) => state.session?.user);

    return (
        <div id='splash-body'>
            <div className='nav-btns-div splash-page'>
          {/* <NavLink className='nav-btn' to='/' exact={true}>
          Home
        </NavLink>
        <NavLink className='nav-btn' to='/cameras'>
            Browse
          </NavLink> */}
          {sessionUser && (
            <>
              {/* <NavLink className='nav-btn' to='/wishlist'>
            Wishlist
          </NavLink>
          <NavLink className='nav-btn' to='/purchaseHistory'>
            Purchase History
          </NavLink> */}
            </>
          )}

          {!sessionUser && (
            <div className='auth-btns'>
              <LoginModal />
              <SignUpModal />
            </div>
          )}
          {sessionUser && (
            <div className='logged-in-div'>
              <NavLink className='nav-btn' to='/cameras/new' exact={true} activeClassName='active'>
                <button className="nav-btn"><i class="fa-solid fa-camera"></i></button>
              </NavLink>
              <NavLink className='nav-btn' to='/shopping-cart' exact={true} activeClassName='active'>
                <button className="nav-btn"><i class="fa-solid fa-cart-shopping"></i></button>
              </NavLink>
                <i class="fa-solid fa-cart-shopping"></i>
              <LogoutButton />
            </div>
          )}
        </div>
            <img id='splash-image' src={splashPic} />
            <div id='shop-now-div'>
            <Link to="/cameras">
                <button id='shop-now-btn'>Shop Now</button>
            </Link>
            </div>

        </div>
    )
}

export default SplashPage
