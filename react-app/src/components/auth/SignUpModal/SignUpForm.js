import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../../store/session';

import "./SignUp.css";

const SignUpForm = () => {

  const user = useSelector(state => state.session.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [frontendErrors, setFrontendErrors] = useState([])
  const [showErrors, setShowErrors] = useState(false)

  useEffect(() => {
    const errors = [];

    if (password !== repeatPassword) errors.push("Password must match!")
    if (password.length < 6) errors.push("Password must be 6 or more characters!")

    setFrontendErrors(errors)
  }, [repeatPassword, password])


  const onSignUp = async (e) => {
    e.preventDefault();
    // console.log("INSIDE ONSIGNUP")
    // console.log("FRONTEND ERRORS: ", frontendErrors)
    if (!frontendErrors.length) {
      if (password === repeatPassword) {
        const data = await dispatch(signUp(username, email, password));

        if (data) {
          setErrors(data)
        }
        else {
          history.push('/cameras')
        }
      }
      return
    }
    setShowErrors(true)
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }




  return (
    <form
      id="sign-up-form"
      onSubmit={onSignUp}>
      <h2 id="sign-up-title">Sign Up</h2>
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
        <div className='errors'>
            {showErrors && (
              <>
              {frontendErrors.map((error) => (
                <p>{error}</p>
              ))}
              </>
            )}
        </div>
      </div>
      <div id="sign-up-inputs-div">
        <label className='form-label'>User Name</label>
        <input
          className='form-input'
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
        ></input>

        <label className='form-label'>Email</label>
        <input
          className='form-input'
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>

        <label className='form-label'>Password</label>
        <input
          className='form-input'
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>

        <label className='form-label'>Repeat Password</label>
        <input
          className='form-input'
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <div id="sign-up-btn-div">
        <button className='cam-form-btn post' type='submit'>Sign Up</button>
      </div>
    </form>
  );
};

export default SignUpForm;
