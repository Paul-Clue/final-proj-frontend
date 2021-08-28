// import React, { useState, useEffect } from 'react';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from '../util/apiFetch';
import { addFrame, changeFrame } from '../actions';
import Nav from './Nav';

function Home(props) {
  const { routerProps } = props;
  const dispatch = useDispatch();

  function sendInfo(load) {
    dispatch(changeFrame(load));
  }

  const url = 'http://localhost:3001/frm';
  useEffect(() => {
    getData(url)
      .then((response) => response.json())
      .then((data) => {
        // setCurrentUser(data);
        console.log(data)//eslint-disable-line
        dispatch(addFrame(data));

        routerProps.history.push('/Home');
        return data;
      })
      .then((data) => console.log(data));//eslint-disable-line
  }, []);

  // const { currentuser } = props;
  const frame2 = useSelector((state) => state.frame);
  console.log(frame2)//eslint-disable-line

  return (
    <>
      <Nav />
      <ul>
        {frame2.map((frm) => (
          <Link frame={frm.make} key={frm.id} className="Link home1" onClick={() => sendInfo(frm)} to="/profile">
            <li key={frm.id}>
              {frm.make}
              <img src={frm.pic} alt="frames" />
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

Home.propTypes = { routerProps: PropTypes.instanceOf(Object).isRequired };

export default Home;
