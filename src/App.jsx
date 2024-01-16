import './App.css'
import { CreateTodoButton } from './components/CreateTodoButton'
import {TodoCount} from './components/TodoCount'
import {TodoItem} from './components/TodoItem'
import {TodoList} from './components/TodoList'
import {TodoSearch} from './components/TodoSearch'


export default function App() {
  return (
    <>
      <TodoCount completed={3} total={5}></TodoCount>
      <TodoSearch></TodoSearch>

      <TodoList>
        <TodoItem></TodoItem>
      </TodoList>

      <CreateTodoButton></CreateTodoButton>
    </>
  )
}

