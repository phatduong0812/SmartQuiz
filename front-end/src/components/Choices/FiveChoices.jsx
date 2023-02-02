import React, { useState } from 'react'

import { Box, Button, TextField, Typography } from '@mui/material'

import Answers from './Answers'

const answers = ['A', 'B', 'C', 'D', 'E']

const FiveChoices = ({ submitQuestionHandler }) => {
    const [firstChoice, setFirstChoice] = useState('')
    const [secondChoice, setSecondChoice] = useState('')
    const [thirdChoice, setThirdChoice] = useState('')
    const [fourthChoice, setFourthChoice] = useState('')
    const [fifthChoice, setFifthChoice] = useState('')
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
        setFourthChoice('')
        setFifthChoice('')
        setQuestionName('')
    }

    const submitQuestion = () => {
        const question = {
            name: questionName,
            values: [
                {
                    name: firstChoice,
                    value: answersSelected.includes('A'),
                },
                {
                    name: secondChoice,
                    value: answersSelected.includes('B'),
                },
                {
                    name: thirdChoice,
                    value: answersSelected.includes('C'),
                },
                {
                    name: fourthChoice,
                    value: answersSelected.includes('D'),
                },
                {
                    name: fourthChoice,
                    value: answersSelected.includes('E'),
                },
            ],
            answers: answersSelected,
            multiline: true,
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
            <TextField
                label="D choice"
                variant="outlined"
                fullWidth
                placeholder="D: "
                sx={{ mb: 2 }}
                value={fourthChoice}
                onChange={(event) => setFourthChoice(event.target.value)}
            />
            <TextField
                label="E choice"
                variant="outlined"
                fullWidth
                placeholder="E: "
                sx={{ mb: 2 }}
                value={fifthChoice}
                onChange={(event) => setFifthChoice(event.target.value)}
                multiline
                maxRows={5}
            />
            <Box my={2}>
                <Typography sx={{ mb: 1.5 }}>Answers: </Typography>
                <Answers handleChange={handlerAnswers} answers={answers} answersSelected={answersSelected} mode={4} />
            </Box>
            <Box mt={1.5} display="flex" justifyContent="flex-end">
                <Button
                    variant="contained"
                    onClick={submitQuestion}
                    sx={{ borderRadius: 3, py: 1, px: 5 }}
                    color="primary"
                >
                    Submit
                </Button>
            </Box>
        </React.Fragment>
    )
}

export default FiveChoices
