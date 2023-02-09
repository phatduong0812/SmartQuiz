import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from '~/features/authSlice'
import GradeReducer from '~/features/gradeSlice'
import SchoolsReducer from '~/features/schoolSlice'
import SubjectReducer from '~/features/subjectSlice'

export const store = configureStore({
    reducer: {
        auth: AuthReducer,
        schools: SchoolsReducer,
        grades: GradeReducer,
        subjects: SubjectReducer,
    },
})
