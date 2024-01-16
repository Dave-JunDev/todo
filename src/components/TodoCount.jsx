
import React from 'react'

export default function TodoCount(props) {
  return (
    <>
      <h1>Ya completaste {props.completed} de {props.total} TODOs</h1>
    </>
  )
}
