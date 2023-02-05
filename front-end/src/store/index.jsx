import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from '~/features/authSlice'
import SchoolsReducer from '~/features/schoolSlice'

export const store = configureStore({
    reducer: {
        auth: AuthReducer,
        schools: SchoolsReducer,
    },
})
