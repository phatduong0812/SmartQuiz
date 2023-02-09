import React, { useEffect, useState } from 'react'

import RouteList from '../routes'

import { useSnackbar } from '~/HOC/SnackbarContext'
import useAuthAction from '~/features/authSlice/auth-actions'
import { setGrades } from '~/features/gradeSlice'
import useGrade from '~/features/gradeSlice/grade-action'
import { setSchools } from '~/features/schoolSlice'
import useSchoolAction from '~/features/schoolSlice/school-actions'
import { setSubjects } from '~/features/subjectSlice'
import useSubject from '~/features/subjectSlice/subject-action'
import { useAppDispatch } from '~/hooks/redux-hooks'
import Loading from '~/pages/Loading'

function App() {
    const authAction = useAuthAction()
    authAction.autoLoginHandler()
    const dispatch = useAppDispatch()
    const { getSchools } = useSchoolAction()
    const { getSubjects } = useSubject()
    const { getGrades } = useGrade()
    const [loading, setIsLoading] = useState(true)
    const showSnackBar = useSnackbar()

    useEffect(() => {
        const firstController = new AbortController()
        const firstSignal = firstController.signal
        const secondController = new AbortController()
        const secondSignal = secondController.signal
        const thirdController = new AbortController()
        const thirdSignal = thirdController.signal

        const getClass = getGrades(firstSignal)
        const getSub = getSubjects(secondSignal)
        const getSchoolses = getSchools(thirdSignal)

        Promise.all([getClass, getSub, getSchoolses])
            .then((res) => {
                const grades = res[0].data.data
                const subjects = res[1].data.data
                const schools = res[2].data.data

                dispatch(setSchools(schools))
                dispatch(setGrades(grades))
                dispatch(setSubjects(subjects))
                setIsLoading(false)
            })
            .catch(() => {
                showSnackBar({
                    severity: 'error',
                    children: 'Something went wrong, please try again later.',
                })
                setIsLoading(false)
            })

        return () => {
            firstController.abort()
            secondController.abort()
            thirdController.abort()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return loading ? <Loading /> : <React.Fragment>{RouteList}</React.Fragment>
}

export default App
