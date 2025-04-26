import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { LoginSchema } from '../types'
import { loginByUsername } from '../services/loginByUsername'

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<LoginSchema['username']>) => {
            state.username = action.payload
        },
        setPassword: (state, action: PayloadAction<LoginSchema['password']>) => {
            state.password = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUsername.fulfilled, (state) => {
            state.error = undefined
            state.isLoading = false
        })
        builder.addCase(loginByUsername.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(loginByUsername.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    },
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice
