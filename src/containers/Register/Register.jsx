import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import './Register.css';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&::placeholder': {
        color: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  input: {
    color: 'white',
    '&::placeholder': {
      fontStyle: 'italic',
      color: 'white',
    },
  },
}));

function Register(props) {
  const classes = useStyles();
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
    const userData = [username, email, password];
    localStorage.setItem('userData', JSON.stringify(userData));
    props.history.push('/login');
  };

  return (
    <>
      <div className='register-container'>
        <h1 className='registerHeader'>Sign In!</h1>
        <form
          noValidate
          className={'register-form ' + classes.root}
          autoComplete='off'
          onSubmit={onRegisterSubmit}
        >
          <CssTextField
            id='login-email'
            label='Username'
            variant='outlined'
            className='register-input'
            InputProps={{
              className: classes.input,
            }}
            InputLabelProps={{
              style: {
                color: 'white',
              },
            }}
            onChange={(e) => setUsername(e.target.value)}
          />
          <CssTextField
            id='login-email'
            label='Email'
            variant='outlined'
            className='register-input'
            InputProps={{
              className: classes.input,
            }}
            InputLabelProps={{
              style: {
                color: 'white',
              },
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CssTextField
            id='login-password'
            label='Password'
            variant='outlined'
            className='register-input'
            InputProps={{
              className: classes.input,
            }}
            InputLabelProps={{
              style: {
                color: 'white',
              },
            }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='terms'>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                  style={{
                    color: 'white',
                  }}
                />
              }
              label='I agree the terms and conditions'
            />
          </div>
          <Button
            disabled={signInBtn}
            type='submit'
            variant='contained'
            style={{ marginTop: '1rem' }}
          >
            Sign In
          </Button>
        </form>
      </div>
    </>
  );
}

export default Register;
