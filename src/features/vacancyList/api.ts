import { RequestVacanciesType, ResponseVacanciesType } from "../../store/slices/vacancy/types"
import { instance } from "../../api/api"

export const vacancyAPI = {
  vacancy(data: RequestVacanciesType) {
    return instance.get<ResponseVacanciesType>("vacancies/", {
      params: {
        published: 1,
        ...data
      }
    })
  }
}