import { useRef } from 'react'

import { Box, Divider, Typography } from '@mui/material'

import { AppStyles } from '~/constants/styles'

const QuestionCard = ({ question, ans }) => {
    const correctAnswersIndex = useRef([])
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
                    {question.name}
                </Typography>
                {question.answers.map((value, index) => (
                    <Typography key={index} sx={{ fontSize: 17, mb: 1 }}>
                        {ans[index]}. {value.name}
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
                {question.answers
                    .filter(
                        (value, index) =>
                            value.isCorrectAnswer === true && correctAnswersIndex.current.push(ans[index]) && true
                    )
                    .map((value) => value.name)
                    .map((name, index) => (
                        <Typography sx={{ fontWeight: 500, mb: 1.5 }} key={index}>
                            {correctAnswersIndex.current[index]}. {name}
                        </Typography>
                    ))}
            </Box>
        </Box>
    )
}

export default QuestionCard
