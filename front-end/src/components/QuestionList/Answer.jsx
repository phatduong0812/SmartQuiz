import { Box, Typography } from '@mui/material'

import { AppStyles } from '~/constants/styles'

// import { AppStyles } from '~/constants/styles'

const Answer = ({ choice, answer, isCorrect }) => {
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography sx={{ mr: 1, fontSize: 20, fontWeight: 500 }}>{choice}.</Typography>
            <Box
                py={2}
                px={3}
                sx={{
                    backgroundColor: isCorrect === true ? AppStyles.colors['#DCE6FF'] : AppStyles.colors['#EEF2FF'],
                    borderRadius: 3,
                }}
                flex={1}
                mb={1}
            >
                <Typography fontWeight={500}>{answer}</Typography>
            </Box>
        </Box>
    )
}

export default Answer
