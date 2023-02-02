import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userId: '',
    token: '',
    email: '',
    username: '',
    role: '',
    status: '',
    image: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state = action.payload
        },
        logout: () => initialState,
    },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
