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
            state.email = action.payload.email
            state.role = action.payload.role
        },
        logout: () => initialState,
    },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
