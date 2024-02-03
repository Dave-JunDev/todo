
import React, {useContext} from 'react'
import { CreateTodoButton } from './components/CreateTodoButton'
import {TodoCount} from './components/TodoCount'
import {TodoItem} from './components/TodoItem'
import {TodoList} from './components/TodoList'
import {TodoSearch} from './components/TodoSearch'
import { TodoContext } from './Context/TodoContext'

function AppUI() {
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        removeTodo
    } = useContext(TodoContext)
    return (
    <>
        <div className='container-app'>
            <div className='todo'>
                <TodoCount></TodoCount>
                <TodoSearch></TodoSearch>
                <TodoList>
                {loading && <div className="loader"></div>}
                {error && <p>Ocurrio un error</p>}
                {!loading && searchedTodos.length === 0 && <p>Crea tu primer todo</p>}
                {searchedTodos.map((todo) =>(
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

export {AppUI}
