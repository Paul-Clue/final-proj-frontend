import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getData } from '../util/apiFetch';
import { addFrame, changeFrame } from '../actions';
import Nav from './Nav';
import '../assets/stylesheets/Home.css';
import twit from '../assets/img/twitter2.png';
import face from '../assets/img/facebook.png';
import inst from '../assets/img/instagram.png';
import gucci from '../assets/img/gucci.png';
import armani from '../assets/img/armani.png';
import burberry from '../assets/img/burberry3.png';
import dg from '../assets/img/dg.png';
import versace from '../assets/img/versace.png';
import tomford from '../assets/img/tomford.jpg';

function Home(props) {
  const { routerProps } = props;
  const dispatch = useDispatch();

  function sendInfo(load) {
    dispatch(changeFrame(load));
  }

  const url = 'https://secure-mountain-84366.herokuapp.com/frm';
  useEffect(() => {
    getData(url)
      .then((response) => response.json())
      .then((data) => {
        dispatch(addFrame(data));

        routerProps.history.push('/Home');
        return data;
      });
  }, []);

  const frame2 = useSelector((state) => state.frame);

  return (
    <>
      <main>
        <section>
          <h1 className="header">Latest Frames</h1>
          <div className="header2">Make an appointment for sizing today!</div>
          <hr className="line" />
          <div className="accent">{null}</div>
          <div className="accent2">{null}</div>
        </section>
        <section>
          <div className="card-group row row-cols-6">
            <Nav />
            {frame2.map((frm) => (
              <div key={frm.id} className="col">
                <Link frame={frm.make} key={frm.id} className="Link home1" onClick={() => sendInfo(frm)} to="/profile">
                  {frm.make === 'Gucci'//eslint-disable-line
                    ? <img src={gucci} className="card-img-top guc" width="300px" alt="frames" />
                    : frm.make === 'Versace'//eslint-disable-line
                      ? <img src={versace} className="card-img-top ver" width="300px" alt="frames" />
                    : frm.make === 'Armani'//eslint-disable-line
                        ? <img src={armani} className="card-img-top arm" width="300px" alt="frames" />
                    : frm.make === 'D&G'//eslint-disable-line
                          ? <img src={dg} className="card-img-top dg" width="300px" alt="frames" />
                    : frm.make === 'Tom Ford'//eslint-disable-line
                            ? <img src={tomford} className="card-img-top tom" width="300px" alt="frames" />
                            : frm.make === 'Burberry'
                              ? <img src={burberry} className="card-img-top burb" width="300px" alt="frames" />
                              : ''}
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{frm.make}</h5>
                  <p className="card-text"><small className="text-muted">Make an appointment for these frames.</small></p>
                  <img src={twit} className="icon" width="100px" alt="icon" />
                  <img src={face} className="icon" width="100px" alt="icon" />
                  <img src={inst} className="icon" width="100px" alt="icon" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

Home.propTypes = { routerProps: PropTypes.instanceOf(Object).isRequired };

export default Home;
