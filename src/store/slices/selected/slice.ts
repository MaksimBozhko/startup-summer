import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { ItemType } from "../vacancy/types"

const slice = createSlice({
  name: "selected",
  initialState: [] as ItemType[],
  reducers: {
    setVacancy: (state, action: PayloadAction<{ vacancy: ItemType, isSelected: boolean }>) => {
      action.payload.isSelected
        ? state.filter((el) => el.id !== action.payload.vacancy.id)
        : state.push(action.payload.vacancy)
    }
  }
})

export const selectedVacancyReducer = slice.reducer
export const selectedVacancyActions = slice.actions




