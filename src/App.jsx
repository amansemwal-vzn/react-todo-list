import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([]);
  const [todoVal, setTodoVal] = useState('')

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos:newList}));
  }

  function handleAddTodos(newTodo){
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(idx){
    const newTodoList = todos.filter((todo, todoIdx) => {
      return todoIdx !== idx
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(idx){
    const editValue = todos[idx]
    setTodoVal(editValue)
    handleDeleteTodo(idx)
  }

  useEffect(() =>{
    if(!localStorage)
      return
    let localTodos = localStorage.getItem('todos')

    if(!localTodos)
      return
    
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <TodoInput
      todoVal={todoVal}
      setTodoVal={setTodoVal}
      handleAddTodos={handleAddTodos} />
      <TodoList
      handleEditTodo={handleEditTodo}
      handleDeleteTodo={handleDeleteTodo}  
      todos={todos} />
    </>
  )
}

export default App
