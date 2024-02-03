import { TodoProvider } from './Context/TodoContext'
import React, { useContext } from 'react'
import { AppUI } from './AppUI'

export default function App() {
  return (
    <TodoProvider>
        <AppUI></AppUI>
    </TodoProvider>
  )
}

