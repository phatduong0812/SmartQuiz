import React, { useState } from 'react'

import { Box, Button, TextField, Typography } from '@mui/material'

import Answers from './Answers'

import { questionUniqueId, uniqueId } from '~/utils/IdGenerator'

const answers = ['A', 'B', 'C']

const ThreeChoices = ({ submitQuestionHandler }) => {
    const [firstChoice, setFirstChoice] = useState('')
    const [secondChoice, setSecondChoice] = useState('')
    const [thirdChoice, setThirdChoice] = useState('')
    const [questionName, setQuestionName] = useState('')
    const [answersSelected, setAnswersSelected] = useState([])

    const handlerAnswers = (event) => {
        const {
            target: { value },
        } = event

        setAnswersSelected(typeof value === 'string' ? value.split(',') : value)
    }

    const resetHandler = () => {
        setFirstChoice('')
        setSecondChoice('')
        setThirdChoice('')
        setQuestionName('')
    }

    const submitQuestion = () => {
        const question = {
            quest: questionName,
            ans: [
                {
                    id: questionUniqueId(),
                    name: firstChoice,
                    isCorrect: answersSelected.includes('A'),
                },
                {
                    id: questionUniqueId(),
                    name: secondChoice,
                    isCorrect: answersSelected.includes('B'),
                },
                {
                    id: questionUniqueId(),
                    name: thirdChoice,
                    isCorrect: answersSelected.includes('C'),
                },
            ],
            multiple: true,
            answers: answersSelected,
            id: uniqueId(),
        }
        submitQuestionHandler(question)
        resetHandler()
    }

    return (
        <React.Fragment>
            <TextField
                label="Question name"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
                value={questionName}
                onChange={(event) => setQuestionName(event.target.value)}
                multiline
                maxRows={5}
            />
            <TextField
                label="A choice"
                variant="outlined"
                fullWidth
                placeholder="A:"
                sx={{ mb: 2 }}
                value={firstChoice}
                onChange={(event) => setFirstChoice(event.target.value)}
                multiline
                maxRows={5}
            />
            <TextField
                label="B choice"
                variant="outlined"
                fullWidth
                placeholder="B: "
                sx={{ mb: 2 }}
                value={secondChoice}
                onChange={(event) => setSecondChoice(event.target.value)}
                multiline
                maxRows={5}
            />
            <TextField
                label="C choice"
                variant="outlined"
                fullWidth
                placeholder="C: "
                sx={{ mb: 2 }}
                value={thirdChoice}
                onChange={(event) => setThirdChoice(event.target.value)}
                multiline
                maxRows={5}
            />
            <Box my={2}>
                <Typography sx={{ mb: 1.5 }}>Answers: </Typography>
                <Answers handleChange={handlerAnswers} answers={answers} answersSelected={answersSelected} mode={3} />
            </Box>
            <Box mt={1.5} display="flex" justifyContent="flex-end">
                <Button
                    variant="contained"
                    sx={{ borderRadius: 3, py: 1, px: 5 }}
                    color="primary"
                    onClick={submitQuestion}
                >
                    Submit
                </Button>
            </Box>
        </React.Fragment>
    )
}

export default ThreeChoices
