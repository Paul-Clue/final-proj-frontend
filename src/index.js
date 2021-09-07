import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './assets/stylesheets/index.css';
import App from './conainers/App';

const user = {
  name: '',
  password: '',
  user_id: '',
};

const frame = [];

const appointments = [];

const prof = {
  make: '',
  pic: '',
};

const error = '';

const store = createStore(
  rootReducer,
  {
    user, appointments, frame, prof, error,
  },
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
