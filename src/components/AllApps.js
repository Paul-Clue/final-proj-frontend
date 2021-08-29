// import React, { useState, useRef, useEffect } from 'react';
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
// import qs from 'qs';
// import { createBrowserHistory } from 'history';
// import { postData, getData2 } from '../util/apiFetch';
import { getData2 } from '../util/apiFetch';
// import { postData } from '../util/apiFetch';
import { setDate } from '../actions';
import Nav from './Nav';
import '../assets/stylesheets/Profile.css';

function AllApps() {
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

  const url = 'http://localhost:3001/appoints2';
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
        // console.log(data)//eslint-disable-line
        console.log(data)//eslint-disable-line
          console.log("List of things:")//eslint-disable-line
        dispatch(setDate(data));

        // routerProps.history.push('/profile');
        return data;
      })
      .then((data) => console.log(data) + console.log(date2));
  }, []);
  // const show = [];
  // for (const [key, value] of Object.entries(date2)) {//eslint-disable-line
  //   // <h1 key={key}>{value}</h1>
  //   show.push([value, value.city, value.date]);
  // }

  return (
    <>
      <Nav />
      {/* {show.filter((date) => <h1 key={date[0]}>{date[0]}</h1>)} */}

      {/* <h1>{date2[0].id}</h1> */}
      {console.log('This is above')}
      {/* {console.log(show)} */}
      {console.log(date2)}
      {/* {console.log(Array.isArray(show))} */}
      {console.log('This is under')}
    </>
  );
}

// AllApps.propTypes = { currentuser: PropTypes.instanceOf(Object).isRequired };
// AllApps.propTypes = { routerProps: PropTypes.instanceOf(Object).isRequired };

export default AllApps;
