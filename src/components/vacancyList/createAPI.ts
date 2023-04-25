import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = "https://startup-summer-2023-proxy.onrender.com/2.0/"

export const vacanciesAPI = createApi({
  reducerPath: 'vacanciesAPI',
  baseQuery: fetchBaseQuery({ baseUrl, credentials: 'include' }),
  endpoints: (builder) => ({
    getVacancies: builder.query({
      query: (params) => ({
        url: `vacancies/`,
        method: 'GET',
        params
      }),
      // transformResponse: (data: CataloguesResponseType[]) => data.map(el => ({key: el.key, title_rus: el.title_rus})),
    }),
  }),
})

export const { useGetVacanciesQuery } = vacanciesAPI