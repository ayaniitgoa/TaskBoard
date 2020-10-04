import React from 'react';
import './SingleList.css';

function SingleList(props) {
  return (
    <div>
      <span>{props.list.title}</span>
    </div>
  );
}

export default SingleList;
