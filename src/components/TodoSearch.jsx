
import React, { useContext } from 'react'
import { TodoContext } from '../Context/TodoContext'

function TodoSearch() {

  const {searchValue,setSearchValue} = useContext(TodoContext)

  const handleChange = (event) =>
  {
    event.preventDefault()
    setSearchValue(event.target.value)
  }

  return (
    <>
        <input
          placeholder="Cortar cebolla"
          type="text"
          className='Search'
          value={searchValue}
          onChange={handleChange}
        >
        </input>
    </>
  )
}

export {TodoSearch};
