import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

import "../../context/Buttons.css"

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <button className="nav-btn" onClick={onLogout}>
    <i class="fa-solid fa-arrow-right-from-bracket"></i>
  </button>;
};

export default LogoutButton;
