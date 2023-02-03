import { Box, Typography } from '@mui/material'

import { AppStyles } from './../../constants/styles'

const QuestionCardLeft = ({ children }) => {
    return (
        <Box>
            <Typography sx={{ mb: 2 }}>Câu hỏi</Typography>
            <Box
                sx={{
                    borderRadius: 3,
                    py: 2,
                    px: 3,
                    backgroundColor: AppStyles.colors['#DCE6FF'],
                    minHeight: 150,
                    fontSize: 16,
                }}
            >
                <Typography fontWeight={500}>{children}</Typography>
            </Box>
        </Box>
    )
}

export default QuestionCardLeft
