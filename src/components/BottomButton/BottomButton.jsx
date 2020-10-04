import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './BottomButton.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

function BottomButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab backgroundColor='#0d47a1' aria-label='add' className='bottom-btn'>
        <AddIcon />
      </Fab>
    </div>
  );
}

export default BottomButton;
