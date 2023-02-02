import { Box, Divider, Typography } from '@mui/material'

import { AppStyles } from '~/constants/styles'

const QuestionCard = ({ question }) => {
    return (
        <Box
            display="flex"
            width="1"
            py={1}
            mb={1.5}
            sx={{ backgroundColor: AppStyles.colors['#FFFFFF'], borderRadius: 2, boxShadow: 1 }}
        >
            <Box flexBasis="60%" p={2}>
                <Typography mb={3} sx={{ fontSize: 17, fontWeight: 500 }}>
                    {question.quest}
                </Typography>
                {question.ans.map((value, index) => (
                    <Typography key={index} sx={{ fontSize: 17, mb: 1 }}>
                        {value.name}
                    </Typography>
                ))}
            </Box>
            <Divider
                orientation="vertical"
                flexItem
                variant="middle"
                sx={{
                    borderRightWidth: '1px',
                    backgroundColor: AppStyles.colors['#CCDBFF'],
                }}
            />
            <Box flexBasis="40%" sx={{ p: 2 }}>
                <Typography sx={{ fontWeight: 500 }}>
                    {question.ans.find((value) => value.id === question.correct).name}
                </Typography>
            </Box>
        </Box>
    )
}

export default QuestionCard
