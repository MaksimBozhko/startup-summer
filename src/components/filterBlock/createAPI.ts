import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = "https://startup-summer-2023-proxy.onrender.com/2.0/"

export const cardsAPI = createApi({
  reducerPath: 'cardsAPI',
  baseQuery: fetchBaseQuery({ baseUrl, credentials: 'include' }),
  endpoints: (builder) => ({
    getCatalogues: builder.query({
      query: (options) => ({
        url: `catalogues/`,
        method: 'GET',
        params: options,
      }),
    }),


  }),
})

export const { useGetCataloguesQuery } = cardsAPI