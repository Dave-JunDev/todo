
import React from 'react'

function TodoSearch({searchValue, setSearchValue}) {

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
