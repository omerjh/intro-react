import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    
    return (
        <li className="TodoItem">
        <span 
            className={`Icon Icon-check ${props.complete && 'Icon-check--active'}`}
            onClick={ props.onComplete }
        >
            √
        </span>
        <p className={`TodoItem-p ${props.complete && 'TodoItem-p--complete'}`}>
            {props.text}
        </p>
        <span 
            className="Icon Icon-delete"
            onClick={ props.onDelete }
        >
            X
        </span>
        </li>
);
}
  
  export { TodoItem };
  
