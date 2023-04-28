import { RequestVacanciesType, ResponseVacanciesType } from "../../store/slices/vacancy/types"
import { instance } from "../../api/api"

export const vacanciesAPI = {
  vacancies(data: RequestVacanciesType) {
    return instance.get<ResponseVacanciesType>("vacancies/", {
      params: {
        published: 1,
        ...data
      }
    })
  },
  vacancy(id: string) {
    return instance.get<ResponseVacanciesType>(`vacancies/${id}`)
  }
}