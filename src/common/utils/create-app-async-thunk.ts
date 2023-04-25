import { createAsyncThunk } from "@reduxjs/toolkit"
import { AppDispatch, RootState } from "../../store/store"

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispatch
  rejectValue: null |unknown
}>()

export type RejectValueType = {
  data: ResponseType
}
export type ResponseType<D = {}> = {
  resultCode: number
  messages: string[]
  data: D
}
