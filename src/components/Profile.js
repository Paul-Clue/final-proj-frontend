import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import getData from '../util/apiFetch';
import { setUser } from '../actions';


function Profile(props) {
  const { currentuser } = props;
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


  return (
    <>
      <h1>{currentuser.name}</h1>
      <h1>{currentuser.password}</h1>
      <h1>Make an appointment with us!</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="dateInput">
          Appointment Date:
          {/* <input type="date" name="date" ref={nam} value={name} id="nameInput" onChange={handleOnChange} /> */}
          <input type="date" id="dateInput"
          name="date" value="2018-07-22"
          min="2021-01-01" max="2050-12-31" onChange={handleOnChange}>
          </input>
        </label>
        <input type="submit" value="Make Appointment" />
      </form>
    </>
  );
}

Profile.propTypes = { currentuser: PropTypes.instanceOf(Object).isRequired };

export default Profile;
