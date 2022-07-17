import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { authenticate } from './store/session';
import { getCameras } from './store/cameras';
import { getCategories } from './store/categories';
import { getReviews } from './store/reviews';
import { getUsers } from './store/users';

import NavBar from './components/NavBar';
import Categories from './components/Categories';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AddCameraForm from './components/AddCamera/AddCameraForm';
import EditCameraForm from './components/EditCamera/EditCameraForm';
import SplashPage from './components/SplashPage/SplashPage';
import CameraList from './components/CameraList/CameraList';
import CameraPage from './components/CameraPage/CameraPage'
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import ShoppingCompleted from './components/ShoppingCart/ShoppingCompleted';
import FoldingCamList from './components/CameraList/FoldingCamList';
import InstantCamList from './components/CameraList/InstantCamList';
import PointShootCamList from './components/CameraList/PointShootCamList';
import RangefinderCamList from './components/CameraList/RangefinderCamList';
import TlrCamList from './components/CameraList/TlrCamList';
import SlrCamList from './components/CameraList/SlrCamList';
import Footer from './components/Footer/Footer';
import AboutPage from './components/AboutPage/AboutPage';

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
      <NavBar />
      <Categories />
      <Route path='/' exact={true}>
        <SplashPage />
      </Route>

      <Switch>
        {/* DIFFERENT CATEGORIES: */}
        <Route path='/cameras' exact={true}>
          <CameraList />
        </Route>
        <Route path='/cameras/folding-cameras' exact={true}>
          <FoldingCamList />
        </Route>
        <Route path='/cameras/instant-cameras' exact={true}>
          <InstantCamList />
        </Route>
        <Route path='/cameras/point-and-shoot-cameras' exact={true}>
          <PointShootCamList />
        </Route>
        <Route path='/cameras/rangefinder-cameras' exact={true}>
          <RangefinderCamList />
        </Route>
        <Route path='/cameras/tlr-cameras' exact={true}>
          <TlrCamList />
        </Route>
        <Route path='/cameras/slr-cameras' exact={true}>
          <SlrCamList />
        </Route>

        <ProtectedRoute path='/cameras/new' exact={true} >
          <AddCameraForm />
        </ProtectedRoute>

        <ProtectedRoute path='/cameras/:cameraId/edit' exact={true} >
          <EditCameraForm />
        </ProtectedRoute>

        <Route path='/cameras/:cameraId'>
          <CameraPage />
        </Route>

        <ProtectedRoute path='/shopping-cart' exact={true} >
          <ShoppingCart />
        </ProtectedRoute>

        <ProtectedRoute path='/checkout' exact={true}>
          <ShoppingCompleted />
        </ProtectedRoute>

        <Route path='/about' exact={true}>
          <AboutPage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
