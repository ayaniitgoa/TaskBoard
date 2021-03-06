import React from 'react';
import { connect } from 'react-redux';
import './AllLists.css';
import SingleList from '../SingleList/SingleList';
function Lists(props) {
  return (
    <div className='all-lists custom-alllists-container'>
      {props.allLists.map((list, key) => {
        return (
          <div
            key={key}
            // onClick={() => {
            //   console.log(list.id);
            // }}
          >
            <SingleList list={list} />
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  allLists: state.allLists.AllLists,
});

export default connect(mapStateToProps)(Lists);
