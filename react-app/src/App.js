import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { authenticate } from './store/session';
import { getCameras } from './store/cameras';
import { getCategories } from './store/categories';
import { getReviews } from './store/reviews';
import { getUsers } from './store/users';

import NavBar from './components/NavBar';
import Categories from './components/Categories';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import AddCameraForm from './components/AddCamera/AddCameraForm';
import EditCameraForm from './components/EditCamera/EditCameraForm';
import SplashPage from './components/SplashPage/SplashPage';
import CameraList from './components/CameraList/CameraList';
import CameraPage from './components/CameraPage/CameraPage'
import ShoppingCart from './components/ShoppingCart/ShoppingCart';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session?.user);

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
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }



  return (
    <BrowserRouter>
      {!sessionUser && (
        <Route path='/' exact={true}>
          <SplashPage />
        </Route>
      )}

      <Switch>
        <Route path='/cameras' exact={true}>
          <NavBar />
          <Categories />
          <CameraList />
        </Route>
        {/* <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route> */}
        <ProtectedRoute path='/cameras/new' exact={true} >
          <NavBar />
          <Categories />
          <AddCameraForm />
        </ProtectedRoute>
        <ProtectedRoute path='/cameras/:cameraId/edit' exact={true} >
          <NavBar />
          <Categories />
          <EditCameraForm />
        </ProtectedRoute>
        <Route path='/cameras/:cameraId'>
          <NavBar />
          <Categories />
          <CameraPage />
        </Route>
        {/* <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute> */}
        <ProtectedRoute path='/shopping-cart' exact={true} >
          <NavBar />
          <Categories />
          <ShoppingCart />
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
