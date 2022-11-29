import React from "react";
import { TodoContext } from '../TodoContext'
import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoList } from '../TodoList'
import { TodoItem } from '../TodoItem'
import { CreateTodoButton } from '../CreateTodoButton'

function AppUI(){
    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoContext.Consumer>
                { ({ error, loading, searchedTodo, completeTodo, deleteTodo}) => (
                    <TodoList>
                        {error && <p>Hubo error</p>}
                        {loading && <p>Estams Cargando</p>}
                        {(!loading && !searchedTodo.length) && <p>Crea tu primer todo</p>}
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

                )}
            </TodoContext.Consumer>

            <CreateTodoButton />

        </React.Fragment>
    )
}

export { AppUI };