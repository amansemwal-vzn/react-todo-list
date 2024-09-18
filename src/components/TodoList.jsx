import React from 'react'
import TodoCard from './TodoCard';

const TodoList = (props) => {

    const {todos} = props
    
    return (
    <ul className='main'>
      {todos.map((todo, idx) => {
        return (
            <TodoCard {...props} key={idx} index={idx}>
                <p>{todo}</p>
            </TodoCard>
        )
      })}
    </ul>
  )
}

export default TodoList
