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
            // state.username = action.payload.name
            // state.role = action.payload.role
            // state.image = action.payload.image
            // state.exp = action.payload.exp
            // state.userId = action.payload.userId
            state = action.payload
        },
        logout: () => initialState,
    },
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
