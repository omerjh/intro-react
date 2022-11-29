import React from "react"
import { TodoProvider } from "../TodoContext"
import { AppUI } from "./AppUI"
// import './App.css';

// const defaultTodos = [
//   { text: 'Tarea 1', complete: false },
//   { text: 'Tarea 2', complete: false },
//   { text: 'Tarea 3', complete: false },
//   { text: 'Tarea 4', complete: false }
// ]

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;