import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import LogoutButton from './auth/LogoutButton';
import AddCameraModal from './AddCamera/AddCameraModal';

import './NavBar.css'

const NavBar = () => {
  const sessionUser = useSelector((state) => state.session?.user);
  console.log("SESSION USER: ", sessionUser)
  return (
    <nav id='nav-bar'>
      <div id='nav-btns-div'>
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
      </div>

      {!sessionUser && (
        <div id='auth-btns'>
          <NavLink className='nav-btn' to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
          <NavLink className='nav-btn' to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div>
      )}
      {sessionUser && (
        <div id='logged-in-div'>
          <AddCameraModal />
          <LogoutButton />
        </div>
      )}
    </nav >
  );
}

export default NavBar;
