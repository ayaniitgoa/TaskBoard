import React from 'react';
import './App.css';
import HomePage from './containers/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import LoginPage from './containers/LoginPage/LoginPage';
import Register from './containers/Register/Register';
import store from './reduxSetup/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Switch>
            <Route component={HomePage} exact path='/' />
            <Route component={LoginPage} exact path='/login' />
            {localStorage.getItem('userData') !== null ? (
              <Redirect to='/login' />
            ) : (
              <Route component={Register} exact path='/register' />
            )}
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
