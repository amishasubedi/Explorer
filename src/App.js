import React, { useState, useCallback } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import UserPlaces from './pages/UserPlaces';
import Users from './pages/Users';
import NewPlaces from './pages/NewPlaces';
import UpdatePlace from './pages/UpdatePlace';
import Login from './components/Auth/Login';
import MainNavigation from './components/Navigation/MainNavigation';
import { AuthContext } from './context/auth-context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>
          <Route path="/places/new" exact>
            <NewPlaces />
          </Route>
          <Route path="/places/:placeId">
            <UpdatePlace />
          </Route>
        <Redirect to="/" /> {/* Redirect any unknown routes to the home page */}
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/:userId/places" exact>
          <UserPlaces />
        </Route>
        <Route path="/auth">
          <Login />
        </Route>
        <Redirect to="/auth" /> {/* Redirect any unknown routes to the auth page */}
      </Switch>
    );
  }
  

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
