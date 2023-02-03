import React from 'react'

import { Box } from '@mui/material'

import QuestionCard from './QuestionCard'

const Questions = ({ questions }) => {
    return (
        <Box mt={4}>
            {questions.map((question, index) => (
                <QuestionCard question={question} key={index} />
            ))}
        </Box>
    )
}

export default Questions
