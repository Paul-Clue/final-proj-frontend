import DateReducer from '../reducers/date';
import FrameReducer from '../reducers/frame';
import ProfileReducer from '../reducers/profile';
import ErrReducer from '../reducers/error';
import UserReducer from '../reducers/user';
import { setUser, setDate, addFrame, changeFrame, err } from '../actions/index';

describe('Date Reducer', () => {
  it('It should return the payload', () => {
    const date = '3/7/21';
    expect(DateReducer(undefined, setDate(date))).toBe('3/7/21');
  });
});

describe('Frame Reducer', () => {
  it('It should return the payload', () => {
    const frame = ['Gucci', 'Versace'];
    expect(FrameReducer(undefined, addFrame(frame))).toStrictEqual(['Gucci', 'Versace']);
  });
});

describe('Profile Reducer', () => {
  it('It should return the payload', () => {
    const prof = {make: 'Gucci'};
    expect(ProfileReducer(undefined, changeFrame(prof))).toStrictEqual({make: 'Gucci'});
  });

  it('It should not return an empty payload', () => {
    const prof = {make: null};
    expect(ProfileReducer(undefined, changeFrame(prof))).not.toBeNull();
  });
});

describe('Error Reducer', () => {
  it('It should return the payload', () => {
    const error = 'Error';
    expect(ErrReducer(undefined, err(error))).toStrictEqual('Error');
  });
});

describe('User Reducer', () => {
  it('It should return the payload', () => {
    const user = {name: 'Joe'};
    expect(UserReducer(undefined, setUser(user))).toStrictEqual({name: 'Joe'});
  });
});
