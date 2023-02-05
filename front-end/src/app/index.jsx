import React, { useEffect, useState } from 'react'

import RouteList from '../routes'

import { useSnackbar } from '~/HOC/SnackbarContext'
import useAuthAction from '~/features/authSlice/auth-actions'
import { setSchools } from '~/features/schoolSlice'
import useSchoolAction from '~/features/schoolSlice/school-actions'
import { useAppDispatch } from '~/hooks/redux-hooks'
import Loading from '~/pages/Loading'

function App() {
    const authAction = useAuthAction()
    authAction.autoLoginHandler()
    const dispatch = useAppDispatch()
    const { getSchools } = useSchoolAction()
    const [loading, setIsLoading] = useState(true)
    const showSnackBar = useSnackbar()
    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal
        getSchools(signal)
            .then((data) => {
                const schools = data.data.data
                dispatch(setSchools(schools))
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
            controller.abort()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return loading ? <Loading /> : <React.Fragment>{RouteList}</React.Fragment>
}

export default App
