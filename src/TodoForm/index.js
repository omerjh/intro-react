import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm(){
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const { addTodo, openModal, setOpenModal } = React.useContext(TodoContext);
    
    const onChangeValue = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () =>{
        setOpenModal(!openModal);
    }


    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(!openModal);
    }

    return (
        <form onSubmit={ onSubmit }>
            <label>Escribe tu nuevo TODO</label>
            <textarea value={newTodoValue} onChange={onChangeValue} placeholder="Comprar Frutas"></textarea>

            <div className="TodoForm-buttonContainer">
                <button type="button" className="TodoForm-button TodoForm-button-cancel" onClick={onCancel}>Cancelar</button>
                <button type="submit" className="TodoForm-button TodoForm-button-add">Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };