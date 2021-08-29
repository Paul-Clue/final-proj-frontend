import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import qs from 'qs';
// import { createBrowserHistory } from 'history';
import { postData, getData2 } from '../util/apiFetch';
// import { postData } from '../util/apiFetch';
import { setDate } from '../actions';
import Nav from './Nav';
import '../assets/stylesheets/Profile.css';

function Profile(props) {
  const { currentuser } = props;
  const dat = useRef();
  const cit = useRef();

  // console.log(props)//eslint-disable-line

  const date2 = useSelector((state) => state.appointments);
  // console.log(date2)//eslint-disable-line
  const [date, setDates] = useState(date2.date);

  const frm = useSelector((state) => state.prof);
  const [frm2] = useState(frm);
  // console.log(frm2)//eslint-disable-line
  // console.log(frm)//eslint-disable-line
  const dispatch = useDispatch();
  const { routerProps } = props;

  const handleOnChange = () => {
    setDates(
      dat.current.value,
    );
    // console.log(dat.current.value);//eslint-disable-line
  };

  const url = 'http://localhost:3001/appoints';
  // console.log(`This is user id: ${currentuser.user_id}`)//eslint-disable-line

  useEffect(() => {
    getData2(url, { user_id: currentuser.id, frame_id: frm.id })
      .then((response) => {
        if (response.ok) {
          // console.log(response)//eslint-disable-line
          // console.log("That")//eslint-disable-line
          return response.json();
        }
        console.log(response)//eslint-disable-line
        console.log("That2")//eslint-disable-line
        return '';
      })
      .then((data) => {
        // console.log(data)//eslint-disable-line
        // console.log(data)//eslint-disable-line
        //   console.log("That")//eslint-disable-line
        dispatch(setDate(data));

        // routerProps.history.push('/profile');
        return data;
      })
      .then((data) => console.log(data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      // name: currentuser.name,
      // password: currentuser.password,
      // name: this.state.name,//eslint-disable-line
      // password: this.state.password,//eslint-disable-line
      date: dat.current.value,
      user_id: currentuser.id,
      frame_id: frm.id,
      frame: frm.make,
      city: cit.current.value,
    };

    const url = 'http://localhost:3001/appoint';
    postData(url, user)
      .then((response) => response.json())
      .then((data) => {
      console.log(data)//eslint-disable-line
      console.log("look up")//eslint-disable-line
        dispatch(setDate(data));

        routerProps.history.push('/profile');
        return data;
      })
      .then((data) => console.log(data));
  };

  function getLogo() {
    let flick = '';
    switch (frm.make) {
      case 'Gucci':
        flick = 'https://blog.logomyway.com/wp-content/uploads/2016/12/gucci-logo-gold.jpg';
        return flick;
      case 'Versace':
        flick = 'https://logos-world.net/wp-content/uploads/2020/04/Versace-Logo.png';
        return flick;
      case 'Armani':
        flick = 'https://1000logos.net/wp-content/uploads/2016/10/Giorgio-Armani-logo.jpg';
        return flick;
      case 'D&G':
        flick = 'https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/60a3d1be18fcab31b78277f6_dolce-gabbana-luxury-logo.png';
        return flick;
      case 'Tom Ford':
        flick = 'https://logovtor.com/wp-content/uploads/2020/08/tom-ford-eyewear-logo-vector.png';
        return flick;
      case 'Burberry':
        flick = 'https://1000logos.net/wp-content/uploads/2019/06/Burberry-Logo-1999.jpg';
        return flick;
      default:
        flick = 'No Logo';
        return flick;
    }
  }

  const picture = getLogo();

  const city = ['New York', 'Los Angeles', 'Chicago'];
  const bool = true;

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
        <label htmlFor="city">
          City:
          <select name="city" id="city" className="cities" ref={cit} onChange={handleOnChange}>
            {city.map((cit) => <option value={cit} key={cit}>{cit}</option>)}
          </select>
        </label>
        <label htmlFor="make">
          Designer:
          <input type="text" id="make" name="make" value={frm.make} readOnly={bool} />
        </label>
        {date2.date ? <button type="submit" disabled>Appointment Made</button> : <button type="submit">Make Appointment</button> }
      </form>
      <img src={picture} alt="frm" width="250px" />
      <p>This is the date</p>
      {/* <h1>{date}</h1>
      <h1>{frm2.make}</h1> */}
      <h1>{date2.date}</h1>
      <h1>{date2.frame_id}</h1>
      <h1>{frm2.make}</h1>
      <img src={frm.pic} alt="frm" />
    </>
  );
}

Profile.propTypes = { currentuser: PropTypes.instanceOf(Object).isRequired };
Profile.propTypes = { routerProps: PropTypes.instanceOf(Object).isRequired };
// Profile.propTypes = { frame: PropTypes.string.isRequired };

export default Profile;
