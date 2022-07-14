import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../../store/session';

import "./Login.css"

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
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
            <div key={ind}>{error.split(": This field")}</div>
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
      </div>
    </form>
  );
};

export default LoginForm;
