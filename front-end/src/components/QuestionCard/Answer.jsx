import { Box, Checkbox, Typography } from '@mui/material'

import { AppStyles } from '~/constants/styles'

const Answer = ({ choice, answer, isCorrect }) => {
    return (
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography sx={{ mr: 1 }}>{choice}.</Typography>
            <Box py={2} px={3} sx={{ backgroundColor: AppStyles.colors['#DCE6FF'], borderRadius: 3 }} flex={1} mb={1}>
                <Typography fontWeight={500}>{answer}</Typography>
            </Box>
            <Checkbox readOnly checked={isCorrect} sx={{ ml: 1 }} />
        </Box>
    )
}

export default Answer
