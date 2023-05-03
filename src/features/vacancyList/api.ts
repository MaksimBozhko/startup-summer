import { RequestVacanciesType, ResponseVacanciesType, ResponseVacancyType } from "../../store/slices/vacancy/types"
import { instance } from "../../api/api"

export const vacanciesAPI = {
  vacancies(data: RequestVacanciesType) {
    return instance.get<ResponseVacanciesType>("vacancies/", {
      params: {
        published: 1,
        no_agreement: 1,
        count: 4,
        ...data
      }
    })
  },
  vacancy(id: string) {
    return instance.get<ResponseVacancyType>(`vacancies/${id}`)
  }
}