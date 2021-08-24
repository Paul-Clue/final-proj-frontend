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
};

// const frames = {
//   make: '',
// };

// const appointments = {
//   date: '',
// };

// const store = createStore(
//   rootReducer,
//   { user: user, filter: filters, detail: details },
//   devToolsEnhancer(),
// );

const store = createStore(
  rootReducer,
  { user },
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
