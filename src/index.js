import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './reducers';
import './index.css';
import App from './components/App';

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
  devToolsEnhancer(),
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
