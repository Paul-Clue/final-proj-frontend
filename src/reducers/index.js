import { combineReducers } from 'redux';
import UserReducer from './user';
// import FilterReducer from './filter';
// import DetailsReducer from './detail';

const rootReducer = combineReducers({
  user: UserReducer,
  // filter: FilterReducer,
  // detail: DetailsReducer,
});

export default rootReducer;
