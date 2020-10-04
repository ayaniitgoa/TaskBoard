import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Helmet } from 'react-helmet';
import './LoginPage.css';

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

function LoginPage(props) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginBtn, setLoginBtn] = useState(true);
  const [localData, setLocalData] = useState([]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    if (localData) {
      if (email === localData[1] && password === localData[2]) {
        props.history.push('/');
      } else {
        console.log(email, localData[1], password, localData[2]);
      }
    }
  };

  useEffect(() => {
    if (email && password) {
      setLoginBtn(false);
    } else {
      setLoginBtn(true);
    }
  }, [password, email]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData'));
    setLocalData(data);
    console.log(data);
    if (data) {
      setEmail(data[1]);
      setPassword(data[2]);
    }
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Login</title>
      </Helmet>
      <div className='login-container'>
        <h1 className='loginHeader'>Log In!</h1>
        <form
          noValidate
          autoComplete='off'
          className='login-form'
          onSubmit={handleLoginSubmit}
        >
          <CssTextField
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            id='login-email'
            label='Email'
            variant='outlined'
            className='login-input'
            InputProps={{
              className: classes.input,
            }}
            InputLabelProps={{
              style: {
                color: 'white',
              },
            }}
          />
          <CssTextField
            className='login-input'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            id='login-password'
            label='Password'
            variant='outlined'
            InputProps={{
              className: classes.input,
            }}
            InputLabelProps={{
              style: {
                color: 'white',
              },
            }}
          />
          <div className='login-last-line'>
            <div className='remember-me'>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    name='Remember Me'
                    style={{
                      color: 'white',
                    }}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                }
                label='Remember Me'
              />
            </div>
            <div className='forgot-pass'>
              <Typography className={classes.root}>
                <Link
                  style={{
                    color: 'white',
                  }}
                  href='#'
                  onClick={(e) => e.preventDefault()}
                >
                  Forgot Password
                </Link>
              </Typography>
            </div>
          </div>
          <Button
            disabled={loginBtn}
            type='submit'
            variant='contained'
            style={{ marginTop: '1rem' }}
          >
            Login
          </Button>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
