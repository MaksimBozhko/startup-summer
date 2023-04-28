import { createSlice } from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"

import { RequestStatusType } from "./types"

export const initialState = {
  status: "idle" as RequestStatusType,
  error: null as string | null,
  isInitialized: false
}

//thunks
// const initializeApp = createAppAsyncThunk('app/initializeApp', async (_, { rejectWithValue, dispatch }) => {
// 	try {
// 		const res = await authAPI.me()
// 		if (res.data.resultCode === 0) {
// 			dispatch(authActions.setIsLoggedIn({ isLoggedIn: true }))
// 		}
// 	} catch (e) {
// 		handleServerNetworkError(e, dispatch)
// 		return rejectWithValue(null)
// 	}
// })

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: builder => {
    // builder.addCase(initializeApp.fulfilled, state => {
    // 	state.isInitialized = true
    // })
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
export const appThunks = {}