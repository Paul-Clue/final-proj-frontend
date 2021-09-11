import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as ReactBootstrap from 'react-bootstrap';
import { postData } from '../util/apiFetch';
import { setUser, err, setLoading } from '../actions';
import tom from '../assets/img/tomford2.png';
import '../assets/stylesheets/Login.css';
import { login, login2 } from '../components/GetUrls';

function Login(props) {
  // const [LyricsItem, setLyricsItem] = useState(null);
  // const [Loading, setLoading] = useState(false);

  const nam = useRef();
  const pass = useRef();

  const nam2 = useRef();
  const pass2 = useRef();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [name2, setName2] = useState('');
  const [password2, setPassword2] = useState('');

  const message = useSelector((state) => state.error);
  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  const handleOnChange = () => {
    setName(
      nam.current.value,
    );
    setPassword(
      pass.current.value,
    );
  };

  const handleOnChange2 = () => {
    setName2(
      nam2.current.value,
    );

    setPassword2(
      pass2.current.value,
    );
  };

  const { routerProps } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name,
      password,
    };

    postData(login, user)
      .then((response) => response.json())
      .then((data) => {//eslint-disable-line
        dispatch(setUser(data));
        if (data.message === 'Couldn\'t find User') {
          dispatch(setLoading(false));
          dispatch(err('Please try to login again or create an account.'));
          routerProps.history.push('/');
        } else {
          dispatch(err(null));
          routerProps.history.push('/Home');
          return data;
        }
      });
    dispatch(setLoading(true));
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();

    const user = {
      name: name2,
      password: password2,
    };

    postData(login2, user)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setUser(data));
        if (data.message === 'no-no') {
          dispatch(setLoading(false));
          dispatch(err('This account already exists. Please try creating another account or login.'));
          routerProps.history.push('/');
        }
        routerProps.history.push('/Home');
        return data;
      });

    dispatch(setLoading(true));
  };

  return (
    <>
      <main className="loginDiv">
        <div className="loginDiv2" style={{ backgroundImage: `url( ${tom})` }}>
          {loading ? <ReactBootstrap.Spinner animation="border" variant="info" className="spinner" /> : null}
          {/* <ReactBootstrap.Spinner animation="border" variant="info" className="spinner" /> */}
          <h1 className="err">{message}</h1>
          <h1 className="bigLogo">FrameFace</h1>
          <form onSubmit={handleSubmit} id="loginId">
            <label htmlFor="nameInput">
              Name:
              <input type="text" name="name" ref={nam} value={name} id="nameInput" onChange={handleOnChange} />
            </label>
            <label htmlFor="passwordInput">
              Password:
              <input type="password" name="password" ref={pass} value={password} id="passwordInput" onChange={handleOnChange} />
            </label>
            <input type="submit" className="submitB" value="Login" />
          </form>

          <form onSubmit={handleSubmit2}>
            <label htmlFor="nameInput2">
              Name:
              <input type="text" name="name2" ref={nam2} value={name2} id="nameInput2" onChange={handleOnChange2} />
            </label>
            <label htmlFor="passwordInput2">
              Password:
              <input type="password" name="password2" ref={pass2} value={password2} id="passwordInput2" onChange={handleOnChange2} />
            </label>
            <input type="submit" className="submitB" value="Create Account" />
          </form>
        </div>
      </main>
    </>
  );
}

Login.propTypes = { routerProps: PropTypes.instanceOf(Object) };
Login.defaultProps = { routerProps: null };

export default Login;
