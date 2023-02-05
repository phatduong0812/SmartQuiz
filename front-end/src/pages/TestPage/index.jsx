import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import Loading from '../Loading'
import TestPageBottom from './TestPageBottom'
import TestPageHeader from './TestPageHeader'

import { useSnackbar } from '~/HOC/SnackbarContext'
import { useStudySet } from '~/actions/study-set'

const TestPage = () => {
    const { id } = useParams()
    const { getStudySet } = useStudySet()
    const showSnackbar = useSnackbar()
    const [studySetDetail, setStudySetDetail] = useState({})
    const [isFirstRender, setIsFirstRender] = useState(true)
    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal
        getStudySet(id, signal)
            .then((response) => {
                const data = response.data.data

                setStudySetDetail(data)
                setIsFirstRender(false)
            })
            .catch(() => {
                showSnackbar({
                    severity: 'error',
                    children: 'Something went wrong, please try again later.',
                })
                setIsFirstRender(false)
            })
        return () => {
            controller.abort()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <React.Fragment>
            <TestPageHeader />
            {isFirstRender ? <Loading /> : <TestPageBottom questions={studySetDetail.questions} />}
        </React.Fragment>
    )
}

export default TestPage
