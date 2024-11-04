import React from 'react'
import { useState } from 'react'

const TodoInput = (props) => {

  const { handleAddTodo } = props
  const [inputValue, setInputValue] = useState('')

  return (
    <div className='input-container'>
      <input placeholder='Add task' value={inputValue} onChange={(e) => {
        setInputValue(e.target.value)
      }}>


      </input>
      <button onClick={() => {
        if (!inputValue) { return }
        handleAddTodo(inputValue)
      }}>
        <i className="fa-solid fa-plus"></i>
      </button>

    </div>
  )
}

export default TodoInput
