import React from 'react';
import { FiCheck } from "react-icons/fi";
import { BsFillTrashFill } from "react-icons/bs";
import './TodoItem.css';

function TodoItem(props) {
    
    return (
        <li className="TodoItem">
        <span 
            className={`Icon Icon-check ${props.complete && 'Icon-check--active'}`}
            onClick={ props.onComplete }
        >
            <FiCheck />
        </span>
        <p className={`TodoItem-p ${props.complete && 'TodoItem-p--complete'}`}>
            {props.text}
        </p>
        <span 
            className="Icon Icon-delete"
            onClick={ props.onDelete }
        >
            <BsFillTrashFill />
        </span>
        </li>
);
}
  
  export { TodoItem };
  
