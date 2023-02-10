import React, { useEffect, useState } from 'react'

import { useHistory } from 'react-router-dom'

import { Grid, Skeleton, Typography } from '@mui/material'
import ButtonCompo from '~/components/ButtonCompo'
import QuestionList from '~/components/QuestionList'

import ListLibStudySets from './ListLibStudySets'

import { useSnackbar } from '~/HOC/SnackbarContext'
import { useStudySet } from '~/actions/study-set'
import { AppStyles } from '~/constants/styles'

const StudySets = ({ getStudySetList }) => {
    const history = useHistory()
    const ButtonStyle = {
        mt: 1,
        mb: 5,
        width: '100%',
        backgroundColor: AppStyles.colors['#004DFF'],
        textTransform: 'none',
        fontSize: 16,
        ':hover': {
            bgcolor: AppStyles.colors['#0045e5'],
            color: 'white',
        },
    }
    const { getStudySet } = useStudySet()
    const [isFirstRender, setIsFirstRender] = useState(true)
    const [studySet, setStudySet] = useState({})
    const [studySetDetail, setStudySetDetail] = useState({})
    const showSnackbar = useSnackbar()
    const [Id, setId] = useState()
    const [clickIndex, setClickIndex] = useState(0)

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal
        getStudySetList(signal)
            .then((response) => {
                const data = response.data.data
                setStudySet(data)

                getStudySet(!Id ? data[0]?.id : Id, signal).then((response) => {
                    const data = response.data.data
                    setStudySetDetail(data)
                    setIsFirstRender(false)
                })
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
    }, [Id])
    // console.log(clickIndex)
    return (
        <Grid
            container
            spacing={3}
            columnSpacing={4}
            sx={{
                backgroundColor: '#eef2ff',
                width: '80%',
                mt: 2,
                position: 'absolute',
            }}
        >
            <Grid item xs={4} md={4} lg={3.5}>
                <Typography
                    // textAlign={'left'}
                    variant="h6"
                    fontWeight={500}
                    sx={{
                        color: 'black',
                        pb: 0.125,
                        mb: 2,
                        fontFamily: 'Roboto !important',
                    }}
                >
                    Học phần
                </Typography>
                {isFirstRender ? (
                    <React.Fragment>
                        <Skeleton sx={{ height: 120 }} animation="wave" variant="rounded" />
                        <Skeleton sx={{ height: 120, mt: 4 }} animation="wave" variant="rounded" />
                        <Skeleton sx={{ height: 120, mt: 4 }} animation="wave" variant="rounded" />
                    </React.Fragment>
                ) : (
                    <ListLibStudySets
                        studySets={studySet}
                        setId={setId}
                        setClickIndex={setClickIndex}
                        clickIndex={clickIndex}
                    />
                )}
            </Grid>
            <Grid item xs={8} md={8} lg={6.5}>
                {isFirstRender ? (
                    <Skeleton sx={{ height: 425, mb: 2, mt: 6 }} animation="wave" variant="rounded" />
                ) : (
                    <React.Fragment>
                        <Typography
                            fontWeight={500}
                            sx={{
                                fontSize: 32,
                                color: AppStyles.colors['#333333'],
                                pb: 0.125,
                                mb: 2,
                                fontFamily: 'Roboto !important',
                            }}
                        >
                            {studySetDetail?.name}
                        </Typography>

                        <QuestionList questions={studySetDetail?.questions} />
                    </React.Fragment>
                )}
                <ButtonCompo
                    variant="contained"
                    style={ButtonStyle}
                    onClick={() => history.push(`/study-sets/${studySetDetail?.id}`)}
                >
                    Xem thêm
                </ButtonCompo>
            </Grid>
            <Grid item xs={8} md={8} lg={2}></Grid>
        </Grid>
    )
}

export default StudySets
