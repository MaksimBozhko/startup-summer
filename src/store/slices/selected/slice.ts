import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { ItemType } from "../vacancy/types"

const slice = createSlice({
  name: "selected",
  initialState: [] as ItemType[],
  reducers: {
    setVacancy: (state, action: PayloadAction<{ vacancy: ItemType, isSelected: boolean }>) => {
      const vacancyIndex = state.findIndex((el) => el.id === action.payload.vacancy.id)
      if (action.payload.isSelected && vacancyIndex >= 0) {
        state.splice(vacancyIndex, 1)
      } else if (!action.payload.isSelected && vacancyIndex < 0) {
        state.push({ ...action.payload.vacancy, isSelected: true })
      }
      const vacancy = state.find((el) => el.id === action.payload.vacancy.id)
      if (vacancy) {
        vacancy.isSelected = !action.payload.isSelected
      }
    }
  }
})

export const selectedVacancyReducer = slice.reducer
export const selectedVacancyActions = slice.actions




