import { combineReducers } from 'redux';
import UserReducer from './user';
import DateReducer from './date';
import FrameReducer from './frame';
import ProfileReducer from './profile';
import ErrReducer from './error';
import LoadingReducer from './loading';

const rootReducer = combineReducers({
  user: UserReducer,
  appointments: DateReducer,
  frame: FrameReducer,
  prof: ProfileReducer,
  error: ErrReducer,
  loading: LoadingReducer,
});

export default rootReducer;
