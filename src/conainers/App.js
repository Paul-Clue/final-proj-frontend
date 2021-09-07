import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import '../assets/stylesheets/App.css';
import Login from './Login';
import Profile from './Profile';
import Home from '../components/Home';
import AllApps from '../components/AllApps';

function App() {
  const CurrentUser = useSelector((state) => state.user);
  return (
    <>
      <BrowserRouter>
        {
        CurrentUser.name
          ? (
            <Switch>
              <Route exact path="/Home" render={(props) => <Home currentuser={CurrentUser} routerProps={props} />} />
              <Route exact path="/Appoint" render={(props) => <AllApps routerProps={props} />} />

              <Route exact path="/" render={(props) => <Login routerProps={props} />} />
              <Route
                exact
                path="/Profile"
                render={(props) => (<Profile currentuser={CurrentUser} routerProps={props} />)}
              />
            </Switch>
          )
          : <Switch><Route path="/" render={(props) => <Login routerProps={props} />} /></Switch>
      }
      </BrowserRouter>
    </>
  );
}

export default App;
