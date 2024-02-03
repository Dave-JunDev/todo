function CreateTodoButton() {

  const createTodo = (event) => {
    event.preventDefault()
    console.log('le diste click')
  }

  return (
    <div className='container-button'>
      <button onClick={createTodo} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Añadir Todo</button>
    </div>
  )
}

export {CreateTodoButton}
