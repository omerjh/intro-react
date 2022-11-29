import React from "react";
// Custom Hooks
import { useLocalStorage } from "../customHooks/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){
    const {
        item: todos, 
        saveItem: saveTodos, 
        loading, 
        error
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
  
    const completedTodos = todos.filter( todo => !!todo.complete).length;
    const totalTodos = todos.length;
    
    let searchedTodo = [];
  
    if(!searchValue.length > 0){
      searchedTodo = todos;
    }else{
      searchedTodo = todos.filter( todo =>{
        const todoText = todo.text.toLocaleLowerCase()
        const searchText = searchValue.toLocaleLowerCase();
        return todoText.includes(searchText);
      });
    }
  
    const completeTodo = ( text )=>{
      const todoIndex = todos.findIndex(todo => todo.text === text);
      let newTodos = [...todos];
      newTodos[todoIndex].complete = true;
      saveTodos(newTodos);
    }
  
    const deleteTodo = ( text )=>{
      let newTodos = todos.filter(todo => todo.text !== text);
      saveTodos(newTodos);
    }
    
    return (
        <TodoContext.Provider value={{
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodo,
            completeTodo,
            deleteTodo
        }}>
            { props.children }
        </TodoContext.Provider>
    );
}

export { TodoContext , TodoProvider };