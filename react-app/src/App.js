import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { authenticate } from './store/session';
import { getCameras } from './store/cameras';
import { getCategories } from './store/categories';
import { getReviews } from './store/reviews';
import { getUsers } from './store/users';

import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import AddCameraForm from './components/AddCamera/AddCameraForm';
import SplashPage from './components/SplashPage/SplashPage';
import CameraList from './components/CameraList/CameraList';
import CameraPage from './components/CameraPage/CameraPage'

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  useEffect(() => {
    dispatch(getCameras())
  }, [dispatch])

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  useEffect(() => {
    dispatch(getReviews())
  }, [dispatch])


  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }



  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact={true}>
          <SplashPage />
        </Route>
        <Route path='/cameras' exact={true}>
          <CameraList />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/cameras/new' exact={true} >
          <AddCameraForm />
        </ProtectedRoute>
        <Route path='/cameras/:cameraId'>
          <CameraPage />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
