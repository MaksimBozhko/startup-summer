import { RootState } from "../../store"

export const getVacancy = (state: RootState) => state.vacancy.vacancy
export const getTotalCount = (state: RootState) => state.vacancy.totalCount
export const getSelectPage = (state: RootState) => state.vacancy.selectPage
