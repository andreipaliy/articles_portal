import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User } from 'entities/user'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
    'login/loginByUsername',
    async (authData: LoginByUsernameProps, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:8000/login', authData)

            if (!response.data) {
                throw new Error('error')
            }

            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('error')
        }
    },
)
