// import React, { useState, useRef, useEffect } from 'react';
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import qs from 'qs';
// import { createBrowserHistory } from 'history';
// import { postData, getData2 } from '../util/apiFetch';
import { getData2 } from '../util/apiFetch';
// import { postData } from '../util/apiFetch';
import { setDate } from '../actions';
// import Nav from './Nav';
import '../assets/stylesheets/AllApps.css';
import tom from '../assets/img/tomford.jpg';

function AllApps() {
  const show = [];
  const show2 = [];
  const show3 = [];

  let ind = 0;

  const currentuser = useSelector((state) => state.user);
  // const dat = useRef();

  // console.log(props)//eslint-disable-line

  const date2 = useSelector((state) => state.appointments);
  // console.log(date2)//eslint-disable-line
  // const [date, setDates] = useState(date2.date);

  const frm = useSelector((state) => state.prof);
  // const [frm2] = useState(frm);
  // console.log(frm2)//eslint-disable-line
  // console.log(frm)//eslint-disable-line
  const dispatch = useDispatch();
  // const { routerProps } = props;

  const param = {
    user_id: currentuser.id,
    frame_id: frm.id,
  };

  const url = 'https://secure-mountain-84366.herokuapp.com/appoints2';
  useEffect(() => {
    getData2(url, param)
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
        console.log(data)//eslint-disable-line
          console.log("List of things:")//eslint-disable-line
        dispatch(setDate(data));

        // routerProps.history.push('/profile');
        return data;
      })
      .then((data) => console.log(data) + console.log(date2));
  }, []);

    console.log(show2)//eslint-disable-line
        console.log("2222222222222222222222")//eslint-disable-line

  // for (const [key, value] of date2.entries(obj)) {//eslint-disable-line
  //   // <h1 key={key}>{value}</h1>
  //   show.push([value, value.city, value.date]);
  // }

  console.log(date2)//eslint-disable-line
  console.log('====++++++++==============++++++++++++++')//eslint-disable-line

  Object.entries(date2).forEach(([key, value]) => (
    show3.push(key),//eslint-disable-line
    show.push(value)
  ));

  for (let i = 0; i < show.length; i += 1) {
    console.log(show[i])//eslint-disable-line
    console.log(date2)//eslint-disable-line
    // console.log(show[i].frame.make)//eslint-disable-line
  }

  return (
    <>
      {/* <Nav /> */}
      <h1 className="Apps">Your Appointment Dates</h1>
      <Link className="HOME" to="/Home">
        HOME
      </Link>
      <div style={{ backgroundImage: `url( ${tom})` }} className="appointments">
        <ul className="ul">
          {date2.frame
            ? Object.entries(date2).forEach(([key, value]) => (
            show3.push(key),//eslint-disable-line
            show.push(value),//eslint-disable-line
              show2.push([date2.date, '\xa0\xa0', 'In: ', date2.city, '\xa0\xa0', 'To try on:', '\xa0\xa0', date2.frame.make, '\xa0\xa0', 'frames'])
            ))
            : Object.entries(date2).forEach(([key, value]) => (
              show3.push(key),//eslint-disable-line
              show.push(value),//eslint-disable-line
              show2.push([value.date, '\xa0\xa0', 'In: ', value.city, '\xa0\xa0', 'To try on:', '\xa0\xa0', value.frame.make, '\xa0\xa0', 'frames'])
            ))}

          {date2.frame
            ? show2.map((app) => (
              ind ++,//eslint-disable-line
                <li className="appList" key={ind}>
                  {app}
                </li>
            ))
            : show2.map((app) => (
              ind ++,//eslint-disable-line
                <li className="appList" key={ind}>
                  {app}
                </li>
            ))}
        </ul>
        {/* <img className="backImage" src={tom} alt="images" /> */}
      </div>
      <div className="overlayDiv">{null}</div>
    </>
  );
}

// AllApps.propTypes = { currentuser: PropTypes.instanceOf(Object).isRequired };
// AllApps.propTypes = { routerProps: PropTypes.instanceOf(Object).isRequired };

export default AllApps;
