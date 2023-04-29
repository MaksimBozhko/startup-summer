import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { ItemType } from "../vacancy/types"

const slice = createSlice({
  name: "selected",
  initialState: [] as ItemType[],
  reducers: {
    setVacancy: (state, action: PayloadAction<ItemType>) => {
      state.push(action.payload)
    },
    removeVacancy: (state, action: PayloadAction<number>) => {
      state.filter((el) => el.id !== action.payload )
    }
  },
})

export const selectedVacancyReducer = slice.reducer
export const selectedVacancyActions = slice.actions




