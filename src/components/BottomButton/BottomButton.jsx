import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { makeNewList } from '../../reduxSetup/actions/newListActions';
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

function BottomButton(props) {
  const classes = useStyles();

  const [listName, setListName] = useState('New List');

  const handleNewListSubmit = (e) => {
    e.preventDefault();
    props.makeNewList({ id: uuidv4(), title: listName, alltasks: [] });
  };

  return (
    <div className={'bottom-btn-modal-btn ' + classes.root}>
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
            <div className='modal-body'>
              <form
                autoComplete='off'
                noValidate
                className='addlist-form'
                onSubmit={handleNewListSubmit}
              >
                <TextField
                  id='filled-basic'
                  value={listName}
                  onChange={(e) => {
                    setListName(e.target.value);
                  }}
                />
                <Fab
                  style={{
                    backgroundColor: '#0d47a1',
                  }}
                  aria-label='addTask'
                  className='add-list-btn'
                  size='small'
                  type='submit'
                >
                  <AddIcon />
                </Fab>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null, { makeNewList })(BottomButton);
