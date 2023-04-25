import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CataloguesResponseType } from "./types"

const baseUrl = "https://startup-summer-2023-proxy.onrender.com/2.0/"

export const cataloguesAPI = createApi({
  reducerPath: 'cardsAPI',
  baseQuery: fetchBaseQuery({ baseUrl, credentials: 'include' }),
  endpoints: (builder) => ({
    getCatalogues: builder.query<any, void>({
      query: () => ({
        url: `catalogues/`,
        method: 'GET',
      }),
      transformResponse: (data: CataloguesResponseType[]) => data.map(el => ({key: el.key, title_rus: el.title_rus})),
    }),
  }),
})

export const { useGetCataloguesQuery } = cataloguesAPI