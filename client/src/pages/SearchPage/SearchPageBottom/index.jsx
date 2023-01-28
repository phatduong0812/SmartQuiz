import { Box, Grid, Typography } from '@mui/material'
import ListStudySets from '~/components/ListStudySets'

import Sort from './Sort'

import { Mock_Data } from '~/Mock'
import { AppStyles } from '~/constants/styles'

const SearchPageBottom = () => {
    return (
        <Grid maxWidth={1112} container sx={{ m: '0 auto', mt: 2 }} flexDirection="column">
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
            <Box mt={2}>
                <ListStudySets studySets={Mock_Data.search} />
            </Box>
            <Typography
                mt={5}
                textAlign="center"
                variant="body2"
                fontWeight={400}
                sx={{
                    color: AppStyles.colors['#767680'],
                }}
            >
                Có 10 kết quả tìm kiếm phù hợp
            </Typography>
        </Grid>
    )
}

export default SearchPageBottom
