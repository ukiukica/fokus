import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

import LoginModal from './auth/LoginModal/LoginModal';
import SignUpModal from './auth/SignUpModal/SignUpModal';
import LogoutButton from './auth/LogoutButton';
import logo from "./fokus-logo2.jpg"

import './NavBar.css'

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session?.user);
  // console.log("SESSION USER: ", sessionUser)
  return (
    <>
      <nav id='nav-bar'>
        <div id="search-div">
          <button className="nav-btn disabled"><i className="fa-solid fa-magnifying-glass"></i></button>
          <input id="search-bar" type="text" placeholder="THIS FEATURE IS COMING SOON!"></input>
        </div>

        <div className="logo-div">
          <img id='logo' src={logo} alt="logo"/>
        </div>

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
              {/* <NavLink className='nav-btn' to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink> */}
              <LoginModal />
              <SignUpModal />
            </div>
          )}
          {sessionUser && (
            <div className='logged-in-div'>
              <NavLink className='nav-btn' to='/cameras/new' exact={true} activeClassName='active'>
                <button className="nav-btn"><i className="fa-solid fa-camera"></i></button>
              </NavLink>
              <NavLink className='nav-btn' to='/shopping-cart' exact={true} activeClassName='active'>
                <button className="nav-btn"><i className="fa-solid fa-cart-shopping"></i></button>
              </NavLink>
                <i className="fa-solid fa-cart-shopping"></i>
              <LogoutButton />
            </div>
          )}
        </div>
      </nav >
    </>
  );
}

export default NavBar;
