import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { postData, getData2 } from '../util/apiFetch';
import { setDate } from '../actions';
import Nav from '../components/Nav';
import '../assets/stylesheets/Profile.css';
import colors from '../assets/img/colors.png';
import { getLogo, appoints, appoint } from '../components/GetUrls';

function Profile(props) {
  const { currentuser } = props;
  const dat = useRef();
  const cit = useRef();

  const date2 = useSelector((state) => state.appointments);
  const [date, setDates] = useState(date2.date);

  const frm = useSelector((state) => state.prof);
  const dispatch = useDispatch();
  const { routerProps } = props;

  const handleOnChange = () => {
    setDates(
      dat.current.value,
    );
  };

  useEffect(() => {
    getData2(appoints, { user_id: currentuser.id, frame_id: frm.id })
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

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      date: dat.current.value,
      user_id: currentuser.id,
      frame_id: frm.id,
      frame: frm.make,
      city: cit.current.value,
    };

    postData(appoint, user)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setDate(data));

        routerProps.history.push('/profile');
        return data;
      });
  };

  const picture = getLogo(frm);

  const city = ['New York', 'Los Angeles', 'Chicago'];
  const bool = true;

  return (
    <>
      <main>
        <section>
          <Nav />
        </section>
        <section>
          <div className="accent1">{null}</div>
          <div className="words">
            <img src={picture} className="logo1" alt={date} width="250px" />
            <br />
            <br />
            <h1 className="makeAppoint">Make an appointment with us!</h1>

            <form onSubmit={handleSubmit}>
              <label htmlFor="dateInput">
                Appointment Date:
                <input
                  type="date"
                  id="dateInput"
                  name="date"
                  className="form-control"
                  ref={dat}
                  min="2021-01-01"
                  max="2050-12-31"
                  onChange={handleOnChange}
                />
              </label>
              <br />
              <br />
              <label htmlFor="city">
                City:
                <select name="city" id="city" className="form-control cities" ref={cit} onChange={handleOnChange}>
                  {city.map((cit) => <option value={cit} key={cit}>{cit}</option>)}
                </select>
              </label>
              <br />
              <br />
              <label htmlFor="make">
                Designer:
                <input type="text" id="make" name="make" className="form-control design" value={frm.make} readOnly={bool} />
              </label>
              <br />
              <br />
              {date2.date ? <button type="submit" className="submit" disabled>Appointment Made</button> : <button className="submit" type="submit">Make Appointment</button> }
            </form>
            <div className="imgDiv">
              <img className="colors" src={colors} alt="colors" />
            </div>
          </div>
        </section>
        <section>
          <img className="frame" src={frm.pic} alt="frm" />
        </section>
      </main>
    </>
  );
}

Profile.propTypes = { currentuser: PropTypes.instanceOf(Object).isRequired };
Profile.propTypes = { routerProps: PropTypes.instanceOf(Object) };
Profile.defaultProps = { routerProps: null };

export default Profile;
