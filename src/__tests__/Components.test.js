import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from '@reduxjs/toolkit';
import configureStore from 'redux-mock-store';
import ErrReducer from '../reducers/error';
import FrameReducer from '../reducers/frame';
import ProfileReducer from '../reducers/profile';
import UserReducer from '../reducers/user.js'
import DateReducer from '../reducers/date.js';
import rootReducer from '../reducers/index';
import App from '../components/App';
import AllApps from '../components/AllApps';
import Home from '../components/Home';
import Login from '../conainers/Login';
import Profile from '../components/Profile';
import Nav from '../components/Nav';

// const coins = [{
//   name: 'bitcoin',
// }];

// const filters = 'All';

// const details = [{
//   name: 'testing',
// }];

// const mockStore = configureStore({
//   reducer: { rootReducer }, addCoin: coins, filter: filters, detail: details,
// });

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

const initialState = {
  frame,
  user,
  prof,
  error,
  appointments,
};

const mockStore = configureStore([]);

// const mockStore = configureStore({
//   reducer: {rootReducer}, user, appointments, frame, prof, error,
// });

describe('AllApps Component', () => {
  let store;
  beforeEach(() => {
    // store = createTestStore();
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });
  test('It should render', () => {
    const all = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <AllApps />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(all).toMatchSnapshot();
  });
});

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);//eslint-disable-line
  }

  render() {
    if (this.state.hasError) {//eslint-disable-line
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;//eslint-disable-line
  }
}

export function createTestStore() {//eslint-disable-line
  const store = createStore(
    combineReducers({
      user: UserReducer,
      appointments: DateReducer,
      frame: FrameReducer,
      prof: ProfileReducer,
      error: ErrReducer,
    }),
  );
  return store;
}

let store;

describe('App Component', () => {
  test('It should render', () => {
    const app = renderer.create(
      <BrowserRouter>
        <ErrorBoundary>
          <Provider store={store}>
            <App />
          </Provider>
        </ErrorBoundary>
      </BrowserRouter>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
});

describe('Home Component', () => {
  test('It should render', () => {
    const home = renderer.create(
      <BrowserRouter>
        <ErrorBoundary>
          <Provider store={store}>
            <Home />
          </Provider>
        </ErrorBoundary>
      </BrowserRouter>,
    ).toJSON();
    expect(home).toMatchSnapshot();
  });
});

describe('Login Component', () => {
  test('It should render', () => {
    const login = renderer.create(
      <BrowserRouter>
        <ErrorBoundary>
          <Login />
        </ErrorBoundary>
      </BrowserRouter>,
    ).toJSON();
    expect(login).toMatchSnapshot();
  });
});

describe('Nav Component', () => {
  beforeEach(() => {
    store = createTestStore();
  });
  test('It should render', () => {
    const nav = renderer.create(
      <Provider store={store}>
        <Nav />
      </Provider>,
    ).toJSON();
    expect(nav).toMatchSnapshot();
  });
});

// describe('Profile Component', () => {
//   beforeEach(() => {
//     store = mockStore(initialState);

//     store.dispatch = jest.fn();

//     component = renderer.create(
//       <Provider store={store}>
//         <ErrorBoundary>
//           <Profile />
//         </ErrorBoundary>
//       </Provider>,
//   );
// });

//   it('Should render', () => {
//     expect(component.toJSON()).toMatchSnapshot();
//   });
// }); 

describe('Profile Component', () => {
  beforeEach(() => {
    store = createTestStore();
  });
  test('It should render', () => {
    const prof = renderer.create(
      <Provider store={store}>
        <ErrorBoundary>
          <Profile />
        </ErrorBoundary>
      </Provider>,
    ).toJSON();
    expect(prof).toMatchSnapshot();
  });
});
