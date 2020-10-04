import React from 'react';
import './App.css';
import HomePage from './containers/HomePage/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './containers/LoginPage/LoginPage';
import Register from './containers/Register/Register';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route component={HomePage} exact path='/' />
          <Route component={LoginPage} exact path='/login' />
          <Route component={Register} exact path='/register' />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
