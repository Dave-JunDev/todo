import { useState } from 'react'
import { CreateTodoButton } from './components/CreateTodoButton'
import {TodoCount} from './components/TodoCount'
import {TodoItem} from './components/TodoItem'
import {TodoList} from './components/TodoList'
import {TodoSearch} from './components/TodoSearch'
import { useLocalStorage } from './hooks/useLocalStorage'
/*const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curos de intro a react.js", completed: false },
  { text: "Llorar con la Llorona", completed: false },
  { text: "LALALA", completed: true },
];
localStorage.setItem("Todo_V1", JSON.stringify(defaultTodos));*/
export default function App() {

  const [searchValue, setSearchValue] = useState('')
  const [todos, saveTodos] = useLocalStorage('Todo_V1', [])

  const completedTodos = todos.filter(
    (todo) => todo.completed)
    .length
  const totalTodos = todos.length

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    }
  )

  const completeTodo = (text) => {
    const newTodos = [...todos]
    let todoIndex = newTodos.findIndex((todo) => todo.text === text)
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  }

  const removeTodo = (text) => {
    const newTodos = [...todos]
    let todoIndex = newTodos.findIndex((todo) => todo.text === text)
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  return (
    <>
      <div className='container-app'>
        <div className='todo'>
          <TodoCount completed={completedTodos} total={totalTodos}></TodoCount>
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}></TodoSearch>

          <TodoList>
            {
              searchedTodos.map((todo) =>(
                <TodoItem
                  key={todo.text}
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={() => removeTodo(todo.text)}
                ></TodoItem>
              ))
            }
          </TodoList>

          <CreateTodoButton></CreateTodoButton>
        </div>
      </div>
    </>
  )
}

