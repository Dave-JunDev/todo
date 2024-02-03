import { useEffect, useState } from "react";


function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setTimeout(() => 
    {
      try
      {
        const local = localStorage.getItem(itemName)
        let parsedItem
        if(local)
        {
          parsedItem = JSON.parse(local)
          setItem(parsedItem)
        }
        else
        {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        }

        setLoading(false)
      }
      catch(error)
      {
        setLoading(false)
        setError(error)
      }
    },2000)
  }, [])


  const saveItem = (newItems) =>
  {
    localStorage.setItem(itemName, JSON.stringify(newItems))
    setItem(newItems)
  }

  return {item, saveItem, loading, error}
}

export {useLocalStorage}

/*const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curos de intro a react.js", completed: false },
  { text: "Llorar con la Llorona", completed: false },
  { text: "LALALA", completed: true },
];
localStorage.setItem("Todo_V1", JSON.stringify(defaultTodos));*/