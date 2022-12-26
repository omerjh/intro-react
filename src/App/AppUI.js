import React from "react";
import { TodoContext } from '../TodoContext'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm'
import { TodoLoading } from '../TodoLoading'
import { TodoError } from '../TodoError'
import { EmptyTodos } from '../EmptyTodos'

function AppUI(){
    const { error, loading, searchedTodo, completeTodo, deleteTodo, openModal, setOpenModal} =  React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <TodoError error={error}/>}
                {loading && <TodoLoading />}
                {(!loading && !searchedTodo.length) && <EmptyTodos />}
                {
                    searchedTodo.map( todo => (
                        <TodoItem 
                            key={todo.text} 
                            text={todo.text}
                            complete={todo.complete}
                            onComplete={ () => completeTodo(todo.text) }
                            onDelete={ () => deleteTodo(todo.text) }
                        />
                    )
                )}
            </TodoList>
            
            {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}
            
            
            <CreateTodoButton 
                openModal = {openModal}
                setOpenModal = {setOpenModal}
            />

        </React.Fragment>
    )
}

export { AppUI };