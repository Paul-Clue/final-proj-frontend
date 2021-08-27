import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { postData } from '../util/apiFetch';
import { setDate } from '../actions';
import Nav from './Nav';

function Profile(props) {
  const { currentuser } = props;
  const dat = useRef();

  const date2 = useSelector((state) => state.appointments);
  console.log(date2)//eslint-disable-line
  const [date, setDates] = useState(date2.date);
  const dispatch = useDispatch();
  const { routerProps } = props;

  const handleOnChange = () => {
    setDates(
      dat.current.value,
    );
    // console.log(dat.current.value);//eslint-disable-line
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      // name: currentuser.name,
      // password: currentuser.password,
      // name: this.state.name,//eslint-disable-line
      // password: this.state.password,//eslint-disable-line
      date: dat.current.value,
      user_id: currentuser.user_id,
    };

    const url = 'http://localhost:3001/appoint';

    // useEffect(() => {
    postData(url, user)
      .then((response) => response.json())
      .then((data) => {
        // setCurrentUser(data);
        console.log(data)//eslint-disable-line
        dispatch(setDate(data));

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

  return (
    <>
      <Nav />
      <h1>{currentuser.name}</h1>
      {/* <h1>{currentuser.password}</h1> */}
      <h1>
        This is the Date:
        {date}
      </h1>
      <h1>Make an appointment with us!</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="dateInput">
          Appointment Date:
          {/* <input type="date" name="date" ref={nam}
          value={name} id="nameInput" onChange={handleOnChange} /> */}
          <input
            type="date"
            id="dateInput"
            name="date"
            ref={dat}
            // value="2018-07-22"
            min="2021-01-01"
            max="2050-12-31"
            onChange={handleOnChange}
          />
        </label>
        <input type="submit" value="Make Appointment" />
      </form>
      <p>This is the date</p>
      <h1>{date}</h1>
    </>
  );
}

Profile.propTypes = { currentuser: PropTypes.instanceOf(Object).isRequired };
Profile.propTypes = { routerProps: PropTypes.instanceOf(Object).isRequired };

export default Profile;
