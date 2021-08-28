import { combineReducers } from 'redux';
import UserReducer from './user';
import DateReducer from './date';
import FrameReducer from './frame';
import ProfileReducer from './profile';

const rootReducer = combineReducers({
  user: UserReducer,
  appointments: DateReducer,
  frame: FrameReducer,
  prof: ProfileReducer,
});

export default rootReducer;
