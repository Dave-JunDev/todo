import { useState } from "react";

function useLocalStorage(itemName, initialValue) {

  const local = localStorage.getItem(itemName);
  let parsedItem;

  if(local)
  {
    parsedItem = JSON.parse(local)
  }
  else
  {
    localStorage.setItem(itemName, JSON.stringify(initialValue))
    parsedItem = initialValue
  }

  const [item, setItem] = useState(parsedItem)

  const saveItem = (newItems) =>
  {
    localStorage.setItem(itemName, JSON.stringify(newItems))
    setItem(newItems)
  }

  return [item, saveItem]
}

export {useLocalStorage}