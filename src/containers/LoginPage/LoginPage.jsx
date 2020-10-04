import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import './LoginPage.css';

function LoginPage() {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <>
      <div className='login-container'>
        <p className='loginHeader'>Log In!</p>
        <form
          noValidate
          autoComplete='off'
          className='login-form'
          onSubmit={handleLoginSubmit}
        >
          <TextField
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            id='login-email'
            label='Email'
            variant='outlined'
          />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id='login-password'
            label='Password'
            variant='outlined'
          />
          <div className='login-last-line'>
            <div className='remember-me'>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              <span>Remember Me</span>
            </div>
            <span>Forgot Password?</span>
          </div>
          <Button type='submit' variant='contained'>
            Login
          </Button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
