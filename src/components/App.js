// import React, { useState } from 'react';
import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  BrowserRouter,
  withRouter,
  Route,
  Switch,
} from 'react-router-dom';
import '../App.css';
import Login from '../conainers/Login';
import Profile from './Profile';
import Home from './Home';
// import { setUser } from '../actions';

function App() {
  // constructor() {
  //   super();
  //   this.state = {
  //     CurrentUser: null,
  //   };
  // }
  // const [CurrentUser, setCurrentUser] = useState({ name: null, password: null });
  const CurrentUser = useSelector((state) => state.user);
  console.log(`This is current user: ${CurrentUser}`)//eslint-disable-line
  console.log(CurrentUser)//eslint-disable-line
  // const use = useSelector((state) => state.user);
  // const dispatch = useDispatch();

  // const userSet = (data) => {
  //   // setCurrentUser({
  //   //   name: data.name,
  //   //   password: data.password,
  //   // });
  //   dispatch(setUser(data));
  // };

  // const { CurrentUser } = this.state;
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/login" render={(props) => <Login routerProps={props} />} />
          <Route
            exact
            path="/Profile"
            render={(props) => (
              CurrentUser
                ? (<Profile currentuser={CurrentUser} routerProps={props} />)
                : (<Login />)
            )}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default withRouter(App);
// export default App;
