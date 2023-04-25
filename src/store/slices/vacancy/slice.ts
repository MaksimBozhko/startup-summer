import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { ItemType, RequestVacanciesType, ResponseVacanciesType } from "./types"
import { createAppAsyncThunk } from "../../../common/utils/create-app-async-thunk"
import { vacancyAPI } from "../../../features/vacancyList/api"

const vacancy = createAppAsyncThunk<ResponseVacanciesType, RequestVacanciesType>
("vacancy", async (arg, { rejectWithValue }) => {
  try {
    const res = await vacancyAPI.vacancy(arg)
    return res.data
  } catch (e) {
    return rejectWithValue(e)
  }
})

const slice = createSlice({
  name: "vacancy",
  initialState: {
    vacancy: [] as ItemType[],
    selectPage: 1,
    totalCount: 1
  },
  reducers: {
    setSelectPage: (state, action: PayloadAction<number>) => {
      state.selectPage = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(vacancy.fulfilled, (state, action) => {
        state.vacancy = action.payload.objects
        state.totalCount = action.payload.total
      })
  }
})

export const vacancyReducer = slice.reducer
export const vacancyActions = slice.actions
export const vacancyThunks = { vacancy }




