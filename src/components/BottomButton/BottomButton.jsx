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
      <Fab
        style={{
          backgroundColor: '#0d47a1',
        }}
        aria-label='add'
        className='bottom-btn'
        data-toggle='modal'
        data-target='#addNewList'
      >
        <AddIcon />
      </Fab>

      <div
        className='modal fade'
        id='addNewList'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content rounded-0'>
            <div className='modal-body'>New List</div>
            <Fab
              style={{
                backgroundColor: '#0d47a1',
              }}
              aria-label='addTask'
              className='add-list-btn'
              size='small'
            >
              <AddIcon />
            </Fab>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomButton;
