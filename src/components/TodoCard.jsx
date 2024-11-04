import React from 'react'

const TodoCard = (props) => {
  const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo} = props

  return (
    <div className='card todo-item'>
      <p>{todo.input}</p>
      <div className='buttons'>
        <button onClick={()=> {
          handleCompleteTodo(todoIndex)
        }}>
          <h4>Done</h4>
        </button>
        <button onClick={()=> {
          handleDeleteTodo(todoIndex)
        }}>
          <h4>Delete</h4>
        </button>

      </div>
    </div>
  )
}

export default TodoCard
