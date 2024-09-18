import React from 'react'

const TodoCard = (props) => {

    const {children, handleDeleteTodo, index, handleEditTodo} = props
    return (
        <li className='todoItem'>
            {children}
            <div className="actionsContainer">
                <button onClick={() => {
                    handleEditTodo(index)
                }}>
                    <i className="ri-edit-line"></i>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(index)
                }}>
                    <i className="ri-delete-bin-line"></i>
                </button>                
            </div>
        </li>
    )
}

export default TodoCard
