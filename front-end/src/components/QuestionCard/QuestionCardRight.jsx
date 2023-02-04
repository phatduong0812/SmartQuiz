import { Box, Typography } from '@mui/material'

import Answer from './Answer'

import { choices } from '~/Mock'

const QuestionCardRight = ({ questions }) => {
    return (
        <Box>
            <Typography sx={{ mb: 2 }}>Câu trả lời</Typography>
            {questions.map((question, index) => (
                <Answer
                    key={question.id}
                    choice={choices[index]}
                    isCorrect={question.isCorrect}
                    answer={question.name}
                />
            ))}
        </Box>
    )
}

export default QuestionCardRight
