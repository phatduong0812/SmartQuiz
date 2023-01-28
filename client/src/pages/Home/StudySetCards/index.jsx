import React from 'react'

import { Box, Typography } from '@mui/material'
import ListStudySets from '~/components/ListStudySets'

const StudySetCards = ({ title, studySets }) => {
    return (
        <Box mt={4}>
            <Typography
                textAlign={'left'}
                variant="h6"
                fontWeight={600}
                sx={{
                    color: 'black',
                    pb: 0.125,
                    mb: 2,
                    cursor: 'pointer',
                }}
            >
                {title}
            </Typography>
            <ListStudySets studySets={studySets} />
        </Box>
    )
}

export default StudySetCards
