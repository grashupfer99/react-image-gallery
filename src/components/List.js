import React from 'react';

const List = props => (
  <li>
    <img src={props.url} alt={props.title}/>
  </li>
);

export default List;