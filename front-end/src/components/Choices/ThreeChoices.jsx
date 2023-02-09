import React, { useState } from 'react'

import { v4 as uuid } from 'uuid'

import { Box, Button, TextField, Typography } from '@mui/material'

import Answers from './Answers'

const answers = ['A', 'B', 'C']

const ThreeChoices = ({ submitQuestionHandler, first, second, third, questName, ansSelected, id = -1 }) => {
    const [firstChoice, setFirstChoice] = useState(first ? first : '')
    const [secondChoice, setSecondChoice] = useState(second ? second : '')
    const [thirdChoice, setThirdChoice] = useState(third ? third : '')
    const [questionName, setQuestionName] = useState(questName ? questName : '')
    const [answersSelected, setAnswersSelected] = useState(ansSelected ? ansSelected : [])

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
                    id: uuid(),
                    name: firstChoice,
                    isCorrect: answersSelected.includes('A'),
                },
                {
                    id: uuid(),
                    name: secondChoice,
                    isCorrect: answersSelected.includes('B'),
                },
                {
                    id: uuid(),
                    name: thirdChoice,
                    isCorrect: answersSelected.includes('C'),
                },
            ],
            multiple: true,
            answers: answersSelected,
            id: id === -1 ? uuid() : id,
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
