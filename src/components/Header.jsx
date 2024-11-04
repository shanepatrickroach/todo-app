import React from 'react'

const Header = (props) => {

  const { todos } = props

  const todosLength = todos.length

  return (
    <header>
      {todosLength > 1 ? <h1 className='text-gradient'>You have {todosLength} open tasks.</h1> : <h1 className='text-gradient'>You have {todosLength} open task.</h1>}
    </header>
  )
}

export default Header
