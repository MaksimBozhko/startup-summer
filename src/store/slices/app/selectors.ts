import { RootState } from "../../store"

export const getStatus = (state: RootState) => state.app.status
export const getIsInitialized = (state: RootState) => state.app.isInitialized
export const getError = (state: RootState) => state.app.error
