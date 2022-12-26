import React from 'react';
import { BsPlusLg } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => { props.setOpenModal(!props.openModal); };
  return (
    <button 
      className="CreateTodoButton"
      onClick={ onClickButton }
    >
      <FaPlus />
    </button>
  );
}

export { CreateTodoButton };
