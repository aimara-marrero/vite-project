//import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoAdd from './components/TodoAdd'
import { useTodo } from './hooks/useTodo'



function App() {
  //const [count, setCount] = useState(0)
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleUpdateTodo,
    handleCompleteTodo
  } = useTodo();
  return (
    <>
      <div className='image-container'>   
        <img src="/t-done.svg" alt="logo" width="50" height="50" className='logo' />
      </div>
      <div className="card-to-do">
        <h1>Lista de tareas</h1>
        <div className="counter-todos">
          <h3>Nº Tareas: <span>{todosCount}</span>  </h3>
          <h3>Pendientes: <span>{pendingTodosCount}</span> </h3>
        </div>
        <div className="add-todo">
          <h3>Agregar tarea</h3>
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
        <TodoList
          // Pass for props the data and the 3 functions
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
          handleUpdateTodo={handleUpdateTodo}
          handleCompleteTodo={handleCompleteTodo}
        />
      </div>

    </>
  )
}

export default App
