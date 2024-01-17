
import React from 'react'

function TodoCount({total, completed}) {
  return (
    <>
      <h1 className='title'>
        Ya completaste {completed} de {total} TODOs
      </h1>
    </>
  )
}

export {TodoCount}