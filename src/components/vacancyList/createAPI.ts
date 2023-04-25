import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RequestVacanciesType, ResponseVacanciesType } from "./types"

const baseUrl = "https://startup-summer-2023-proxy.onrender.com/2.0/"

export const vacanciesAPI = createApi({
  reducerPath: 'vacanciesAPI',
  baseQuery: fetchBaseQuery({ baseUrl, credentials: 'include' }),
  endpoints: (builder) => ({
    getVacancies: builder.query<ResponseVacanciesType, RequestVacanciesType>({
      query: (params) => ({
        url: `vacancies/`,
        method: 'GET',
        headers: {
          "X-Api-App-Id": "v3.r.137440105.399b9c5f19384345afe0ad0339e619e71c66af1d.800f8642a38256679e908c370c44267f705c2909"
        },
        params : {
          published: 1,
          ...params
        }
      }),
    }),
  }),
})

export const { useGetVacanciesQuery } = vacanciesAPI