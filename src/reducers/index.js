import { combineReducers } from 'redux';
import UserReducer from './user';
import DateReducer from './date';
// import DetailsReducer from './detail';

const rootReducer = combineReducers({
  user: UserReducer,
  appointments: DateReducer,
  // detail: DetailsReducer,
});

export default rootReducer;
