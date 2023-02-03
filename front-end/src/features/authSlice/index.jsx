import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userId: '',
    token: '',
    email: '',
    username: '',
    role: '',
    status: '',
    image: '',
    exp: 0,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.email = action.payload.email
            state.username = action.payload.name
            state.role = action.payload.role
            state.image = action.payload.image
            state.exp = action.payload.exp
            state.userId = action.payload.userId
            state.exp = action.payload.exp
            state.token = action.payload.token
        },
        logout: (state) => {
            state.email = ''
            state.username = ''
            state.role = ''
            state.image = ''
            state.exp = ''
            state.userId = ''
            state.exp = 0
            state.token = ''
        },
    },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
