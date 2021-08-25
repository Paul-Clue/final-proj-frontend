import { combineReducers } from 'redux';
import UserReducer from './user';
import DateReducer from './date';
import FrameReducer from './frame';

const rootReducer = combineReducers({
  user: UserReducer,
  appointments: DateReducer,
  frame: FrameReducer,
});

export default rootReducer;
