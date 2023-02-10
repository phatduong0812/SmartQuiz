import { useEffect, useState } from 'react'

import { Box, Grid, Typography } from '@mui/material'
import ListStudySets from '~/components/ListStudySets'

import Sort from './Sort'

import { useSnackbar } from '~/HOC/SnackbarContext'
import { useStudySet } from '~/actions/study-set'
import { AppStyles } from '~/constants/styles'
import Loading from '~/pages/Loading'

const SearchPageBottom = () => {
    const { getStudySetList } = useStudySet()
    const [isFirstRender, setIsFirstRender] = useState(true)
    const [studySet, setStudySet] = useState({})
    const showSnackbar = useSnackbar()

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal
        getStudySetList(signal)
            .then((response) => {
                const data = response.data.data
                setStudySet(data)
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
        <Grid maxWidth={1670} container sx={{ m: '0 auto', mt: 2 }} flexDirection="column">
            <Box mt={1} display="flex" justifyContent="space-between" alignItems="center">
                <Typography
                    textAlign="left"
                    variant="h6"
                    fontWeight={600}
                    sx={{
                        color: 'black',
                        mb: 2,
                    }}
                >
                    Kết quả tìm kiếm
                </Typography>
                <Sort />
            </Box>
            <Box mt={4}>{isFirstRender ? <Loading /> : <ListStudySets studySets={studySet} md={3} />}</Box>
            <Typography
                mt={5}
                mb={10}
                textAlign="center"
                variant="body2"
                fontWeight={400}
                sx={{
                    color: AppStyles.colors['#767680'],
                }}
            >
                Có {studySet.length} kết quả tìm kiếm phù hợp
            </Typography>
        </Grid>
    )
}

export default SearchPageBottom
