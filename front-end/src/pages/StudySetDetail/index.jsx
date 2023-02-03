import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import { Box } from '@mui/material'

import Loading from '../Loading'
import DetailHeader from './DetailHeader'
import Questions from './Questions'

import { useSnackbar } from '~/HOC/SnackbarContext'
import { useStudySet } from '~/actions/study-set'

const StudySetDetail = () => {
    const { id } = useParams()
    const { getStudySet } = useStudySet()
    const showSnackbar = useSnackbar()
    const [studySetDetail, setStudySetDetail] = useState({})
    const [isFirstRender, setIsFirstRender] = useState(true)
    useEffect(() => {
        getStudySet(id)
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Box maxWidth={1112} sx={{ m: '0 auto', mt: 5, mb: 9 }}>
            {isFirstRender ? (
                <Loading />
            ) : (
                <React.Fragment>
                    <DetailHeader info={studySetDetail} />
                    <Questions questions={studySetDetail.questions} />
                </React.Fragment>
            )}
        </Box>
    )
}

export default StudySetDetail
