import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import './Register.css';

function Register() {
  const [checked, setChecked] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInBtn, setSignInBtn] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    if (event.target.checked && username && email && password) {
      setSignInBtn(false);
    } else {
      setSignInBtn(true);
    }
  };

  useEffect(() => {
    if (checked && username && email && password) {
      setSignInBtn(false);
    } else {
      setSignInBtn(true);
    }
  }, [checked, username, password, email]);

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, password, checked);
  };

  return (
    <>
      <div className='register-container'>
        <p className='loginHeader'>Sign In!</p>
        <form
          noValidate
          autoComplete='off'
          className='register-form'
          onSubmit={onRegisterSubmit}
        >
          <TextField
            id='login-email'
            label='Username'
            variant='outlined'
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id='login-email'
            label='Email'
            variant='outlined'
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id='login-password'
            label='Password'
            variant='outlined'
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='terms'>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            <span>I agree the terms and conditions</span>
          </div>
          <Button disabled={signInBtn} type='submit' variant='contained'>
            Sign In
          </Button>
        </form>
      </div>
    </>
  );
}

export default Register;
