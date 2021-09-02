// import React, { useState, useRef, useEffect } from 'react';
import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { postData } from '../util/apiFetch';
import { setUser, err } from '../actions';
import tom from '../assets/img/tomford2.png';
import '../assets/stylesheets/Login.css';
// import Nav from '../components/Nav';

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

  const nam2 = useRef();
  const pass2 = useRef();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [name2, setName2] = useState('');
  const [password2, setPassword2] = useState('');

  const message = useSelector((state) => state.error);

  const dispatch = useDispatch();

  const handleOnChange = () => {
    setName(
      // [event.target.name]: event.target.value,
      nam.current.value,
    );
    // console.log(nam.current.value);//eslint-disable-line

    setPassword(
      // [event.target.password]: event.target.value,
      pass.current.value,
    );
  };

  const handleOnChange2 = () => {
    setName2(
      // [event.target.name]: event.target.value,
      nam2.current.value,
    );
    // console.log(nam.current.value);//eslint-disable-line

    setPassword2(
      // [event.target.password]: event.target.value,
      pass2.current.value,
    );
  };

  // const { setCurrentUser } = props;
  const { routerProps } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name,
      password,
    };

    const url = 'https://secure-mountain-84366.herokuapp.com/login';

    // useEffect(() => {
    postData(url, user)
      .then((response) => response.json())
      .then((data) => {//eslint-disable-line
        // setCurrentUser(data);
        dispatch(setUser(data));
        if (data.message === 'Couldn\'t find User') {
          dispatch(err('Please try to login again or create an account.'));
          routerProps.history.push('/');
        } else {
          dispatch(err(null));
          routerProps.history.push('/Home');
          return data;
        }
      })
      .then((data) => console.log(data));
    // }, []);
  };

  const handleSubmit2 = (event) => {
    event.preventDefault();

    const user = {
      name: name2,
      password: password2,
    };

    const url = 'https://secure-mountain-84366.herokuapp.com/login2';

    // useEffect(() => {
    postData(url, user)
      .then((response) => response.json())
      .then((data) => {
        // setCurrentUser(data);
        dispatch(setUser(data));
        if (data.message === 'no-no') {
          dispatch(err('This account already exists. Please try creating another account or login.'));
          routerProps.history.push('/');
        }
        routerProps.history.push('/Home');
        return data;
      })
      .then((data) => console.log(data));
    // }, []);
  };

  return (
    <>
      {/* <Nav /> */}
      <div className="loginDiv">
        <div className="loginDiv2" style={{ backgroundImage: `url( ${tom})` }}>
          <h1 className="err">{message}</h1>
          <h1 className="bigLogo">FrameFace</h1>
          <form onSubmit={handleSubmit}>
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
          <h1>{name}</h1>
          <h1>{password}</h1>
          <h1>{name2}</h1>
          <h1>{password2}</h1>
        </div>
      </div>
    </>
  );
}

// Login.propTypes = { setCurrentUser: PropTypes.instanceOf(Function).isRequired };
Login.propTypes = { routerProps: PropTypes.instanceOf(Object).isRequired };

export default Login;
