import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

import './Navbar.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();

  const [profileImg, setProfileImg] = useState('');

  useEffect(() => {
    const img_number = Math.floor(Math.random() * 1000);
    axios
      .get(`https://picsum.photos/id/${img_number}/info`)
      .then((res) => {
        console.log(res.data.download_url);
        setProfileImg(res.data.download_url);
      })
      .catch((e) => {
        console.log(e);
      });

    return () => {};
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position='static' style={{ background: '#0d47a1' }}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            TasksBoard
          </Typography>

          <img src={profileImg} alt='Profile' className='profile-image' />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
