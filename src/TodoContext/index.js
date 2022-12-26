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
    const [openModal, setOpenModal] = React.useState(false);
  
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
  
    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        complete: false,
          text
      });
      saveTodos(newTodos);
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
            addTodo,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            { props.children }
        </TodoContext.Provider>
    );
}

export { TodoContext , TodoProvider };