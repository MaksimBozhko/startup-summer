import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { ItemType, RequestVacanciesType, ResponseVacanciesType } from "./types"
import { createAppAsyncThunk } from "../../../common/utils/create-app-async-thunk"
import { vacanciesAPI } from "../../../features/vacancyList/api"

const vacancies = createAppAsyncThunk<ResponseVacanciesType, RequestVacanciesType>
("vacancies", async (arg, { rejectWithValue, getState }) => {
  const selectedVacancyIds = getState().selected.map((vacancy) => vacancy.id)
  try {
    const res = await vacanciesAPI.vacancies(arg)
    return {
      objects: res.data.objects.map((item: any) => {
        const isSelected = selectedVacancyIds.includes(item.id)
        return {
          id: item.id,
          profession: item.profession,
          town: item.town.title,
          catalogues: item.catalogues,
          type_of_work: item.type_of_work.title,
          payment_to: item.payment_to,
          payment_from: item.payment_from,
          currency: item.currency,
          firm_activity: item.firm_activity,
          vacancyRichText: item.vacancyRichText,
          isSelected: isSelected
        }
      }),
      total: res.data.total
    }
  } catch (e) {
    return rejectWithValue(e)
  }
})

const vacancy = createAppAsyncThunk<any, string>
("vacancy", async (id, { rejectWithValue, getState }) => {
  const selectedVacancyIds = getState().selected.map((vacancy) => vacancy.id)
  try {
    const res = await vacanciesAPI.vacancy(id)
    console.log(res)
    const isSelected = selectedVacancyIds.includes(res.data.id)
    return {
      id: res.data.id,
      profession: res.data.profession,
      town: res.data.town.title,
      catalogues: res.data.catalogues,
      type_of_work: res.data.type_of_work.title,
      payment_to: res.data.payment_to,
      payment_from: res.data.payment_from,
      currency: res.data.currency,
      firm_activity: res.data.firm_activity,
      vacancyRichText: res.data.vacancyRichText,
      isSelected: isSelected
    }
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
    totalCount: 1
  },
  reducers: {
    setSelectPage: (state, action: PayloadAction<number>) => {
      state.selectPage = action.payload
    },
    updateVacancy: (state, action: PayloadAction<number>) => {
      const vacancy = state.vacancies.find((el) => el.id === action.payload)
      if (vacancy) {
        vacancy.isSelected = !vacancy.isSelected
      }
      if (state.vacancy.id === action.payload) {
        state.vacancy.isSelected = !state.vacancy.isSelected
      }
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




