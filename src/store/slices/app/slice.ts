import { createSlice } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"

import { RequestStatusType } from "./types"
import { createAppAsyncThunk } from "../../../common/utils/create-app-async-thunk"
import { authAPI } from "./api"
import { saveState } from "../../../common/utils/localStorage"

export const initialState = {
  status: "idle" as RequestStatusType,
  error: null as string | null,
  isInitialized: false,
  refresh_token: ""
}

//thunks
const initializeApp = createAppAsyncThunk<any, any>
('app/initializeApp', async (_, { rejectWithValue }) => {
	try {
    const res = await authAPI.me()
    return res.data
	} catch (e) {
		return rejectWithValue(e)
	}
})

const refreshToken = createAppAsyncThunk<any, any>
('app/refresh', async (_, { rejectWithValue, getState }) => {
  const refresh_token = getState().app.refresh_token
  try {
    const res = await authAPI.refresh(refresh_token)
    return res.data
  } catch (e) {
    return rejectWithValue(e)
  }
})

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(initializeApp.fulfilled, (state, action) => {
      saveState("token",  action.payload.access_token)
      state.refresh_token = action.payload.refresh_token
      state.isInitialized = true
    })
    builder.addCase(refreshToken.fulfilled, (state, action) => {
      saveState("token",  action.payload.access_token)
      state.refresh_token = action.payload.refresh_token
    })
    builder.addMatcher(
      (action) => {
        return action.type.endsWith("/pending")
      },
      (state) => {
        state.status = "loading"
      }
    )
    builder.addMatcher(
      (action) => {
        return action.type.endsWith("/fulfilled")
      },
      (state) => {
        state.status = "succeeded"
      }
    )
    builder.addMatcher(
      (action) => {
        return action.type.endsWith("/rejected")
      },
      (state, action) => {
        const err = action.payload as Error | AxiosError<{ error: string }>
        if (axios.isAxiosError(err)) {
          state.error = err.response?.data ? err.response.data.error.message : err.message
        } else {
          state.error = err.message ? `Native error ${err.message}` : "Some error occurred"
        }
        state.status = "failed"
      }
    )
  }
})

export const appSlice = slice.reducer
export const appActions = slice.actions
export const appThunks = { initializeApp, refreshToken }