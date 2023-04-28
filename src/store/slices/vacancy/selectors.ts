import { RootState } from "../../store"

export const getVacancies = (state: RootState) => state.vacancies.vacancies
export const getVacancy = (state: RootState) => state.vacancies.vacancy
export const getTotalCount = (state: RootState) => state.vacancies.totalCount
export const getSelectPage = (state: RootState) => state.vacancies.selectPage
