import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { ItemType, RequestVacanciesType, ResponseVacanciesType } from "./types"
import { createAppAsyncThunk } from "../../../common/utils/create-app-async-thunk"
import { vacanciesAPI } from "../../../features/vacancyList/api"

const vacancies = createAppAsyncThunk<ResponseVacanciesType, RequestVacanciesType>
("vacancies", async (arg, { rejectWithValue }) => {
  try {
    const res = await vacanciesAPI.vacancies(arg)
    return res.data
  } catch (e) {
    return rejectWithValue(e)
  }
})

const vacancy = createAppAsyncThunk<any, string>
("vacancy", async (id, { rejectWithValue }) => {
  try {
    const res = await vacanciesAPI.vacancy(id)
    return res.data
  } catch (e) {
    return rejectWithValue(e)
  }
})

const slice = createSlice({
  name: "vacancy",
  initialState: {
    vacancies: [] as ItemType[],
    vacancy: {} as ItemType,
    selectPage: 1,
    totalCount: 1,
  },
  reducers: {
    setSelectPage: (state, action: PayloadAction<number>) => {
      state.selectPage = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(vacancies.fulfilled, (state, action) => {
        state.vacancies = action.payload.objects
        state.totalCount = action.payload.total
      })
      .addCase(vacancy.fulfilled, (state, action) => {
        state.vacancy = action.payload
      })
  }
})

export const vacancyReducer = slice.reducer
export const vacancyActions = slice.actions
export const vacancyThunks = { vacancies, vacancy }




