import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { vacancyReducer } from "./slices/vacancy/slice"
import { cataloguesReducer } from "./slices/filter/slice"
import { appSlice } from "./slices/app/slice"

const rootReducer = combineReducers({
  app: appSlice,
  vacancy: vacancyReducer,
  catalogues: cataloguesReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];