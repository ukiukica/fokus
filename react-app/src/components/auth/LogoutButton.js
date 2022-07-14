import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/session';

import "../../context/Buttons.css"

const LogoutButton = () => {

  const history = useHistory()

  const dispatch = useDispatch()

  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/')
  };

  return <button className="nav-btn" onClick={onLogout}>
    <i className="fa-solid fa-arrow-right-from-bracket"></i>
  </button>;
};

export default LogoutButton;
