
import React, { useContext } from 'react'
import { TodoContext } from '../Context/TodoContext'

function TodoCount() {
  const {completedTodos, totalTodos} = useContext(TodoContext)

  return (
    <>
      <h1 className='title'>
        Ya completaste {completedTodos} de {totalTodos} TODOs
      </h1>
    </>
  )
}

export {TodoCount}