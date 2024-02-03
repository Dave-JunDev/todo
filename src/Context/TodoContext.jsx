import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext()
function TodoProvider({children}) {
    const [searchValue, setSearchValue] = useState('')
    const {item : todos, saveItem : saveTodos, loading, error} = useLocalStorage('Todo_V1', [])

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

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completeTodo,
            removeTodo,
            searchedTodos,
            setSearchValue,
            totalTodos,
            completedTodos
        }}>
            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}