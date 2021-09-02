import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData2 } from '../util/apiFetch';
import { setDate } from '../actions';
import '../assets/stylesheets/AllApps.css';
import tom from '../assets/img/tomford.jpg';

function AllApps() {
  const show = [];
  const show2 = [];
  const show3 = [];

  let ind = 0;

  const currentuser = useSelector((state) => state.user);

  const date2 = useSelector((state) => state.appointments);

  const frm = useSelector((state) => state.prof);
  const dispatch = useDispatch();

  const param = {
    user_id: currentuser.id,
    frame_id: frm.id,
  };

  const url = 'https://secure-mountain-84366.herokuapp.com/appoints2';
  useEffect(() => {
    getData2(url, param)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return '';
      })
      .then((data) => {
        dispatch(setDate(data));

        return data;
      });
  }, []);

  Object.entries(date2).forEach(([key, value]) => (
    show3.push(key),//eslint-disable-line
    show.push(value)
  ));

  return (
    <>
      <div style={{ backgroundImage: `url( ${tom})` }} className="appointments">
        <div className="overlayDiv">
          <h1 className="Apps">Your Appointment Dates</h1>
          <hr className=" AppsLine" />
          <Link className="HOME" to="/Home">
            <button type="button" className="HOME">HOME</button>
          </Link>
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
        </div>
      </div>
    </>
  );
}

export default AllApps;
