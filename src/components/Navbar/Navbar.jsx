import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { fetchProfileImg } from '../../reduxSetup/actions/profileImgActions';

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

function Navbar(props) {
  const classes = useStyles();

  useEffect(() => {
    props.fetchProfileImg();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position='static' style={{ background: '#0d47a1' }}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            TasksBoard
          </Typography>
          {props.imgData && (
            <img
              src={props.imgData.download_url}
              alt='Profile'
              className='profile-image'
            />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  imgData: state.profileImg.imgData,
});

export default connect(mapStateToProps, { fetchProfileImg })(Navbar);
