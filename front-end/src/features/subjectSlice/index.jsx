import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    secondarySubjects: [],
    highSchoolSubjects: [],
}

const subjectSlice = createSlice({
    name: 'subject',
    initialState,
    reducers: {
        setSubjects: (state, action) => {
            const subjects = [...action.payload]
            subjects.forEach((subject) => {
                const formatSubject = { ...subject, value: subject.id, label: subject.name }
                state.highSchoolSubjects.push(formatSubject)
                state.secondarySubjects.push(formatSubject)
            })
            state.secondarySubjects.pop()
        },
    },
})

export const { setSubjects } = subjectSlice.actions

export default subjectSlice.reducer
