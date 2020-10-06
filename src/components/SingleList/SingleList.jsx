import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Checkbox from '@material-ui/core/Checkbox';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import { connect } from 'react-redux';
import {
  deleteList,
  addTaskToList,
  updateTaskToList,
} from '../../reduxSetup/actions/newListActions';
import { v4 as uuid } from 'uuid';
import TextField from '@material-ui/core/TextField';
import './SingleList.css';
import { KeyboardDatePicker } from '@material-ui/pickers';
import format from 'date-fns/format';

const GreenCheckbox = withStyles({
  root: {
    color: '#0d47a1',

    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color='default' {...props} />);

function SingleList(props) {
  const [newTask, setNewTask] = useState({
    title: '',
    id: uuid(),
    description: '',
    date: '',
    checked: false,
  });
  const [selectedDate, setSelectedDate] = useState(
    new Date('2020-10-18T21:11:54')
  );
  // const handleDateChange = (date) => {
  //   setSelectedDate(date);
  // };
  const handleAddTaskSubmit = (e) => {
    e.preventDefault();
    props.addTaskToList({
      data: newTask,
      id: props.list.id,
    });
    setNewTask({
      title: '',
      id: uuid(),
      description: '',
      date: '',
      checked: false,
    });
  };

  const updateSingleTask = (e, id) => {
    e.preventDefault();
    props.updateTaskToList({
      data: newTask,

      id: props.list.id,
    });
    setNewTask({
      title: '',
      id: uuid(),
      description: '',
      date: '',
      checked: false,
    });
  };

  return (
    <div className='card mt-5 ml-4' style={{ width: '20rem' }}>
      <div className='card-body'>
        <div className='card-top-part'>
          <h5 className='card-title ' style={{ color: '#0d47a1' }}>
            {props.list.title}
          </h5>

          <div className='dropdown three-dots'>
            <button
              type='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
              className='button-threedots'
            >
              <i style={{ color: '#0d47a1' }} className='fas fa-ellipsis-v'></i>{' '}
            </button>
            <div
              style={{ cursor: 'pointer' }}
              className='dropdown-menu'
              aria-labelledby='dropdownMenuButton'
            >
              <p
                onClick={() => {
                  props.deleteList(props.list.id);
                }}
                className='dropdown-item'
              >
                Delete List
              </p>
            </div>
          </div>
        </div>
        <form className='mt-3' onSubmit={handleAddTaskSubmit}>
          <div className='card-add-task-form'>
            <Fab
              size='small'
              style={{
                backgroundColor: '#0d47a1',
                color: 'white',
              }}
              aria-label='add'
              type='submit'
            >
              <AddIcon />
            </Fab>

            <h5 className='card-add-task-text' style={{ color: '#0d47a1' }}>
              Add a Task
            </h5>
          </div>

          <TextField
            id='standard-basic'
            style={{ width: '17rem' }}
            label='Enter Task Name..'
            className='mt-2'
            value={newTask.title}
            onChange={(e) => {
              setNewTask({ ...newTask, title: e.target.value });
            }}
          />
        </form>

        <div className='number-of-completed-task mt-4'>
          {/* <h5 className='number-of-completed-task-text'>Completed(0)</h5> */}
        </div>
        {props.list.alltasks.map((task, key) => {
          return (
            <div key={key} className=''>
              <div className='one-list-all-tasks'>
                <GreenCheckbox
                  icon={<CircleUnchecked style={{ fontSize: 45 }} />}
                  checkedIcon={<CircleChecked style={{ fontSize: 45 }} />}
                />
                <h5 className='task-title'>{task.title}</h5>

                <i
                  data-toggle='modal'
                  data-target={'#updateTaskModal' + task.id}
                  className='fas fa-pen update-btn-single-task'
                  onClick={() => {
                    // console.log(task.id);
                  }}
                ></i>
              </div>

              {task.description && (
                <h6 className='task-description'>{task.description}</h6>
              )}
              {task.date && <h6 className='task-date'>{task.date}</h6>}

              {/* MODAL _ UPDATE */}
              <div
                className='modal modal2 fade'
                data-backdrop='false'
                id={'updateTaskModal' + task.id}
                tabIndex='-1'
                role='dialog'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog' role='document'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <i className='far fa-trash-alt trash-btn-task'></i>
                      <button
                        type='button'
                        className='close'
                        data-dismiss='modal'
                        aria-label='Close'
                      >
                        <span aria-hidden='true'>&times;</span>
                      </button>
                    </div>
                    <div className='modal-body'>
                      <h5>{task.title}</h5>
                      <form onSubmit={(e) => updateSingleTask(e, task.id)}>
                        <TextField
                          label='Add Details'
                          variant='filled'
                          multiline
                          rows={6}
                          style={{ width: '29rem' }}
                          value={newTask.description}
                          onChange={(e) => {
                            setNewTask({
                              ...newTask,
                              title: task.title,
                              id: task.id,
                              description: e.target.value,
                            });
                          }}
                        />

                        <KeyboardDatePicker
                          disableToolbar
                          variant='inline'
                          format='dd/MM/yyyy'
                          margin='normal'
                          id='date-picker-inline'
                          label='Date'
                          value={selectedDate}
                          onChange={(date) => {
                            setSelectedDate(date);
                            setNewTask({
                              ...newTask,
                              title: task.title,
                              id: task.id,
                              date: format(date, 'do MMM,yyyy'),
                            });
                          }}
                          KeyboardButtonProps={{
                            'aria-label': 'change date',
                          }}
                        />

                        <br />
                        <Button
                          variant='contained'
                          style={{ backgroundColor: '#0d47a1', color: 'white' }}
                          className='mt-3'
                          type='submit'
                        >
                          Save Changes
                        </Button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default connect(null, { deleteList, addTaskToList, updateTaskToList })(
  SingleList
);
