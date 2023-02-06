import React, { useState } from 'react'

import { Box, Button, TextField, Typography } from '@mui/material'

import Answers from './Answers'

import { questionUniqueId, uniqueId } from '~/utils/IdGenerator'

const answers = ['A', 'B', 'C', 'D']

const FourChoices = ({ submitQuestionHandler, first, second, third, fourth, questName, ansSelected, id = -1 }) => {
    const [firstChoice, setFirstChoice] = useState(first ? first : '')
    const [secondChoice, setSecondChoice] = useState(second ? second : '')
    const [thirdChoice, setThirdChoice] = useState(third ? third : '')
    const [fourthChoice, setFourthChoice] = useState(fourth ? fourth : '')
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
        setFourthChoice('')
        setQuestionName('')
    }

    const submitQuestion = () => {
        const question = {
            quest: questionName,
            ans: [
                {
                    name: firstChoice,
                    isCorrect: answersSelected.includes('A'),
                    id: questionUniqueId(),
                },
                {
                    name: secondChoice,
                    isCorrect: answersSelected.includes('B'),
                    id: questionUniqueId(),
                },
                {
                    name: thirdChoice,
                    isCorrect: answersSelected.includes('C'),
                    id: questionUniqueId(),
                },
                {
                    name: fourthChoice,
                    isCorrect: answersSelected.includes('D'),
                    id: questionUniqueId(),
                },
            ],
            answers: answersSelected,
            multiple: true,
            id: id === -1 ? uniqueId() : id,
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

export default FourChoices
