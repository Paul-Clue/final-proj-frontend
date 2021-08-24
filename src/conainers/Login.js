// import React, { useState, useRef, useEffect } from 'react';
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import getData from '../util/apiFetch';
import { setUser } from '../actions';

function Login(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     password: '',
  //   };
  //   this.handleOnChange = this.handleOnChange.bind(this);
  // }

  const nam = useRef();
  const pass = useRef();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleOnChange = () => {
    setName(
      // [event.target.name]: event.target.value,
      nam.current.value,
    );
    console.log(nam.current.value);//eslint-disable-line

    setPassword(
      // [event.target.password]: event.target.value,
      pass.current.value,
    );
  };

  // const { setCurrentUser } = props;
  const { routerProps } = props;
  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name,
      password,
      // name: this.state.name,//eslint-disable-line
      // password: this.state.password,//eslint-disable-line
    };

    const url = 'http://localhost:3001/login';

    // useEffect(() => {
    getData(url, user)
      .then((response) => response.json())
      .then((data) => {
        // setCurrentUser(data);
        dispatch(setUser(data));
        routerProps.history.push('/profile');
        return data;
      })
      .then((data) => console.log(data));
    // }, []);

    // fetch('http://localhost:3001/login', {
    //   method: 'Post',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json',//eslint-disable-line
    //   },
    //   body: JSON.stringify(user),
    // })
    // .then((response) => response.json())
    // .then((data) => {
    //   setCurrentUser(data);
    //   routerProps.history.push('/profile');
    //   return data;
    // })
    // .then((data) => console.log(data));
  };

  // const { password } = this.state;
  // const { name } = this.state;

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

// Login.propTypes = { setCurrentUser: PropTypes.instanceOf(Function).isRequired };
Login.propTypes = { routerProps: PropTypes.instanceOf(Object).isRequired };

export default Login;
