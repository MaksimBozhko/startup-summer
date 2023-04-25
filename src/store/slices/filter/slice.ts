import { createSlice } from "@reduxjs/toolkit"

import { createAppAsyncThunk } from "../../../common/utils/create-app-async-thunk"
import { cataloguesAPI } from "../../../features/filterBlock/api"
import { CataloguesResponseType } from "./types"

const catalogues = createAppAsyncThunk<CataloguesResponseType, void>
("catalogues", async (_, { rejectWithValue }) => {
  try {
    const res = await cataloguesAPI.catalogues()
    return res
  } catch (e: any) {
    return rejectWithValue(e)
  }
})

const slice = createSlice({
  name: "catalogues",
  initialState: {
    catalogues: [] as CataloguesResponseType
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(catalogues.fulfilled, (state, action) => {
        state.catalogues = action.payload
      })
  }
})

export const cataloguesReducer = slice.reducer
export const cataloguesThunks = { catalogues }




