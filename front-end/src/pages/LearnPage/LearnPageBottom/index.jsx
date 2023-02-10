import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material'
import { Box, Skeleton, Typography } from '@mui/material'
import ButtonCompo from '~/components/ButtonCompo'

import QuestionCard from './QuestionCard'

import { useSnackbar } from '~/HOC/SnackbarContext'
import { useStudySet } from '~/actions/study-set'
import { AppStyles } from '~/constants/styles'

const LearnPageBottom = () => {
    const ButtonStyle = {
        color: AppStyles.colors['#000F33'],
        textTransform: 'none',
        height: 56,
        minWidth: 413,
        backgroundColor: AppStyles.colors['#CCDBFF'],
        ':hover': {
            bgcolor: AppStyles.colors['#004DFF'],
            color: 'white',
        },
    }
    const EndButton = {
        mt: 4,
        width: '100%',
        backgroundColor: AppStyles.colors['#004DFF'],
        textTransform: 'none',
        fontSize: 16,
        fontWeight: 500,
        ':hover': {
            bgcolor: AppStyles.colors['#0045e5'],
            color: 'white',
        },
    }
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
        <Box maxWidth={850} sx={{ m: '0 auto', mt: 5, mb: 5 }}>
            {isFirstRender ? (
                <React.Fragment>
                    <Skeleton sx={{ height: 425, mb: 2, mt: 6 }} animation="wave" variant="rounded" />
                </React.Fragment>
            ) : (
                <QuestionCard index={0} question={studySetDetail?.questions[0]} />
            )}
            <Box display="flex" alignItems="center" justifyContent="space-between" mt={3}>
                {isFirstRender ? (
                    <React.Fragment>
                        <Skeleton sx={{ height: 56, width: 413 }} animation="wave" variant="rounded" />
                    </React.Fragment>
                ) : (
                    <ButtonCompo style={ButtonStyle} onClick={() => {}}>
                        <ArrowCircleLeft fontSize="medium" />
                        <Typography ml={1.5} sx={{ fontSize: 16, fontWeight: 500 }}>
                            Trở lại
                        </Typography>
                    </ButtonCompo>
                )}
                {isFirstRender ? (
                    <React.Fragment>
                        <Skeleton sx={{ height: 56, width: 413 }} animation="wave" variant="rounded" />
                    </React.Fragment>
                ) : (
                    <ButtonCompo style={ButtonStyle} onClick={() => {}}>
                        <Typography mr={1.5} sx={{ fontSize: 16, fontWeight: 500 }}>
                            Tiếp tục
                        </Typography>
                        <ArrowCircleRight fontSize="medium" />
                    </ButtonCompo>
                )}
            </Box>
            {isFirstRender ? (
                <React.Fragment>
                    <Skeleton sx={{ height: 60, width: 850, mt: 4 }} animation="wave" variant="rounded" />
                </React.Fragment>
            ) : (
                <ButtonCompo variant="contained" style={EndButton} onClick={() => history.push(`/study-sets/${id}`)}>
                    Kết thúc
                </ButtonCompo>
            )}
        </Box>
    )
}

export default LearnPageBottom
