import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    secondarySchool: [],
    highSchool: [],
}

const gradeSlice = createSlice({
    name: 'grade',
    initialState,
    reducers: {
        setGrades: (state, action) => {
            const grades = [...action.payload]
            grades.forEach((grade) => {
                const formatGrade = { ...grade, value: grade.id, label: grade.name }
                if (formatGrade.value < 5) {
                    state.secondarySchool.push(formatGrade)
                } else {
                    state.highSchool.push(formatGrade)
                }
            })
        },
    },
})

export const { setGrades } = gradeSlice.actions

export default gradeSlice.reducer
