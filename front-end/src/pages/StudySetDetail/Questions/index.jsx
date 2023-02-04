import { Box } from '@mui/material'

import QuestionCard from './QuestionCard'

import { choices } from '~/Mock'

const Questions = ({ questions }) => {
    return (
        <Box mt={4}>
            {questions.map((question, index) => (
                <QuestionCard question={question} key={index} ans={choices} />
            ))}
        </Box>
    )
}

export default Questions
