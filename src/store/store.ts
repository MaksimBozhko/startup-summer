import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cataloguesAPI } from "../components/filterBlock/createAPI"
import { vacanciesAPI } from "../components/vacancyList/createAPI"



const rootReducer = combineReducers({
  [cataloguesAPI.reducerPath]: cataloguesAPI.reducer,
  [vacanciesAPI.reducerPath]: vacanciesAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cataloguesAPI.middleware, vacanciesAPI.middleware)
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];