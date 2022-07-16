import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

import { login } from '../../../store/session';
import { demouser } from '../../../store/session';

import "./Login.css"
import "../../../context/Buttons.css"

const LoginForm = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector(state => state.session.user);

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const demoOnClick = async (e) => {
    e.preventDefault()
    await dispatch(demouser('demo@aa.io', 'password'));
    history.push('/cameras')
  }

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    history.push('/cameras')
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/cameras' />;
  }

  return (
    <form
      id="login-form"
      onSubmit={onLogin}>
      <h2 id="login-title">Log In</h2>
      <div className="backend-errors">
        {errors.map((error, ind) => (
          <>
            {error.includes("This field") ?
              <div key={ind}>{error.split(": This field")}</div>
              :
              <div key={ind}>{error.split(":")[1]}</div>
            }
          </>
        ))}
      </div>
      <div id="login-inputs-div">
        <label className='form-label' htmlFor='email'>Email</label>
        <input
          className='form-input'
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />

        <label className='form-label' htmlFor='password'>Password</label>
        <input
          className='form-input'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
      </div>
      <div id="login-btn-div">
        <button className='cam-form-btn post' type='submit'>Login</button>
        <button className="demo-btn" onClick={demoOnClick}>Demo User</button>
      </div>
    </form>
  );
};

export default LoginForm;
