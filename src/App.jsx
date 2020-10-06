import React from 'react';
import './App.css';
import HomePage from './containers/HomePage/HomePage';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import LoginPage from './containers/LoginPage/LoginPage';
import Register from './containers/Register/Register';
import store from './reduxSetup/store';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function App() {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Provider store={store}>
        <Router>
          <div className='App'>
            <Switch>
              <Route component={HomePage} exact path='/' />

              <Route component={Register} exact path='/register' />

              <Route component={LoginPage} exact path='/login' />
            </Switch>
          </div>
        </Router>
      </Provider>
    </MuiPickersUtilsProvider>
  );
}

export default App;

// <div key={key} className=''>
// <UpdateModal task={task} />
// <div className='one-list-all-tasks'>
//   <GreenCheckbox
//     icon={<CircleUnchecked style={{ fontSize: 45 }} />}
//     checkedIcon={<CircleChecked style={{ fontSize: 45 }} />}
//   />
//   <h5 className='task-title'>{task.title}</h5>

//   <i
//     data-toggle='modal'
//     data-target={'#updateTaskModal' + task.id}
//     className='fas fa-pen update-btn-single-task'
//     onClick={() => {
//       // console.log(task.id);
//     }}
//   ></i>
// </div>

// <h6 className='task-description'>{task.description}</h6>
// <h6 className='task-date'>{task.date}</h6>

// {/* MODAL _ UPDATE */}
// <div
//   className='modal fade'
//   id={'updateTaskModal' + task.id}
//   tabIndex='-1'
//   role='dialog'
//   aria-labelledby='exampleModalLabel'
//   aria-hidden='true'
//   data-backdrop='false'
// >
//   <div className='modal-dialog' role='document'>
//     <div className='modal-content'>
//       <div className='modal-header'>
//         <i className='far fa-trash-alt trash-btn-task'></i>
//         <button
//           type='button'
//           className='close'
//           data-dismiss='modal'
//           aria-label='Close'
//         >
//           <span aria-hidden='true'>&times;</span>
//         </button>
//       </div>
//       <div className='modal-body'>
//         <h5>{task.title}</h5>
//         <form onSubmit={(e) => updateSingleTask(e, task.id)}>
//           <TextField
//             label='Add Details'
//             variant='filled'
//             multiline
//             rows={6}
//             style={{ width: '29rem' }}
//             value={newTask.description}
//             onChange={(e) => {
//               setNewTask({
//                 ...newTask,
//                 title: task.title,
//                 id: task.id,
//                 description: e.target.value,
//               });
//             }}
//           />

//           <KeyboardDatePicker
//             disableToolbar
//             variant='inline'
//             format='dd/MM/yyyy'
//             margin='normal'
//             id='date-picker-inline'
//             label='Date picker inline'
//             value={selectedDate}
//             onChange={handleDateChange}
//             KeyboardButtonProps={{
//               'aria-label': 'change date',
//             }}
//           />

//           {/* <TextField
//             id='date'
//             label='Add Date'
//             type='date'
//             defaultValue='2017-05-24'
//             InputLabelProps={{
//               shrink: true,
//             }}
//             className='mt-3'
//             onChange={(e) => {
//               setNewTask({
//                 ...newTask,
//                 title: task.title,
//                 id: task.id,
//                 date: e.target.value,
//               });
//             }}
//           /> */}
//           <br />
//           <Button
//             variant='contained'
//             style={{ backgroundColor: '#0d47a1', color: 'white' }}
//             className='mt-3'
//             type='submit'
//           >
//             Save Changes
//           </Button>
//         </form>
//       </div>
//     </div>
//   </div>
// </div>
