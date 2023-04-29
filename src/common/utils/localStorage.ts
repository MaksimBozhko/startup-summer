import { ItemType } from "../../store/slices/vacancy/types"

export const loadState = () => {
  try {
    const persistedTodoString = localStorage.getItem("selected-vacancy")
    if (persistedTodoString === null) return undefined
    return JSON.parse(persistedTodoString)
  } catch (err) {
    return undefined
  }
}

type SelectedState = {
  selected: ItemType[]
}

export const saveState = (state: SelectedState) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem("selected-vacancy", serializedState)
  } catch {
    // ignore write errors
  }
}