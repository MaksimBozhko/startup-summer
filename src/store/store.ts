import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { vacancyReducer } from "./slices/vacancy/slice"
import { cataloguesReducer } from "./slices/filter/slice"
import { appSlice } from "./slices/app/slice"
import { loadState, saveState } from "../common/utils/localStorage"
import { selectedVacancyReducer } from "./slices/selected/slice"

const rootReducer = combineReducers({
  app: appSlice,
  vacancies: vacancyReducer,
  catalogues: cataloguesReducer,
  selected: selectedVacancyReducer
})

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadState()
})

store.subscribe(() => {
  saveState("selected-vacancy", { selected: store.getState().selected })
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof configureStore>;
export type AppDispatch = AppStore["dispatch"];