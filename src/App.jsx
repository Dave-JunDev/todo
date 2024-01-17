import { CreateTodoButton } from './components/CreateTodoButton'
import {TodoCount} from './components/TodoCount'
import {TodoItem} from './components/TodoItem'
import {TodoList} from './components/TodoList'
import {TodoSearch} from './components/TodoSearch'

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el curos de intro a react.js', completed: false},
  {text: 'Llorar con la Llorona', completed: false},
  {text: 'LALALA', completed: false},
]
export default function App() {
  return (
    <>
      <div className='container-app'>
        <div className='todo'>
          <TodoCount completed={3} total={5}></TodoCount>
          <TodoSearch></TodoSearch>

          <TodoList>
            {
              defaultTodos.map((todo) =>(
                <TodoItem key={todo.text} text={todo.text} completed={todo.completed}></TodoItem>
              ))
            }
          </TodoList>

          <CreateTodoButton></CreateTodoButton>
        </div>
      </div>
    </>
  )
}

