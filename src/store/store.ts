import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cataloguesAPI } from "../components/filterBlock/createAPI"



const rootReducer = combineReducers({
  [cataloguesAPI.reducerPath]: cataloguesAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cataloguesAPI.middleware)
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];