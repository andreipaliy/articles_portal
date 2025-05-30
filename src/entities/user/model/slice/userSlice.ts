import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../types'

const initialState: UserSchema = {}

export const userSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {},
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
