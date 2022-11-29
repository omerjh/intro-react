import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = () => { console.log('aqui hubo un click')};
  return (
    <button 
      className="CreateTodoButton"
      onClick={ onClickButton }
    >+</button>
  );
}

export { CreateTodoButton };
