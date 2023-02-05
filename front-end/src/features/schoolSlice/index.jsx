import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const schoolSlice = createSlice({
    name: 'school',
    initialState,
    reducers: {
        setSchools: (state, action) => {
            const schools = [...action.payload]
            schools.forEach((school) => {
                const formatSchool = { ...school, value: school.id, label: school.name }
                state.push(formatSchool)
            })
        },
    },
})

export const { setSchools } = schoolSlice.actions

export default schoolSlice.reducer
