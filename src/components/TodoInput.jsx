import React, { useState } from 'react'

const TodoInput = (props) => {
    const {handleAddTodos, todoVal, setTodoVal} = props
    

  return (
    <header>
      <input value={todoVal} onChange={(e) => { setTodoVal(e.target.value) }} type="text" placeholder='Enter todo...' />
      <button onClick={()=>{
            handleAddTodos(todoVal)
            setTodoVal('')
        }}>Add</button>
    </header>
  )
}

export default TodoInput
