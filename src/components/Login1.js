import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { postData } from '../util/apiFetch';
import { setUser } from '../actions';

function Login(props) {
  const nam = useRef();
  const pass = useRef();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleOnChange = () => {
    setName(
      nam.current.value,
    );

    setPassword(
      pass.current.value,
    );
  };

  const { routerProps } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name,
      password,
    };

    const url = 'https://secure-mountain-84366.herokuapp.com/login1';

    postData(url, user)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setUser(data));
        routerProps.history.push('/login1');
        return data;
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput">
          Name:
          <input type="text" name="name" ref={nam} value={name} id="nameInput" onChange={handleOnChange} />
        </label>
        <label htmlFor="passwordInput">
          Password:
          <input type="password" name="password" ref={pass} value={password} id="passwordInput" onChange={handleOnChange} />
        </label>
        <input type="submit" value="Login" />
      </form>
      <h1>{name}</h1>
      <h1>{password}</h1>
    </>
  );
}

Login.propTypes = { routerProps: PropTypes.instanceOf(Object).isRequired };

export default Login;
