import React, { useState } from 'react'

import { v4 as uuid } from 'uuid'

import { Cancel } from '@mui/icons-material'
import {
    Box,
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Slide,
    TextField,
} from '@mui/material'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

const initialValue = [
    { name: '', isCorrect: false, id: uuid() },
    { name: '', isCorrect: false, id: uuid() },
]

const Modal = ({ open, onClose, submitQuestionHandler }) => {
    const [answers, setAnswers] = useState(initialValue)
    const [questionName, setQuestionName] = useState('')

    const addMoreAnswer = () => {
        const newField = { name: '', isCorrect: false, id: uuid() }
        setAnswers((prev) => [...prev, newField])
    }

    const handleInputChange = (event, index) => {
        const data = [...answers]
        const name = event.target.name
        data[index][name] = event.target.value
        setAnswers(data)
    }

    const handleCheckChange = (event, index) => {
        const data = [...answers]
        const name = event.target.name
        data[index][name] = event.target.checked
        setAnswers(data)
    }

    const handleDeleteField = (index) => {
        const fields = [...answers]
        fields.splice(index, 1)
        setAnswers(fields)
    }

    const handleSubmit = () => {
        const question = { quest: questionName, ans: answers }
        submitQuestionHandler(question)
        handleReset()
    }

    const handleReset = () => {
        setAnswers(initialValue)
    }

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            onClose={onClose}
            fullWidth
            maxWidth="md"
            keepMounted={false}
        >
            <DialogTitle>Submit your question and answer</DialogTitle>
            <DialogContent dividers>
                <Box sx={{ minWidth: 600 }} component="form">
                    <TextField
                        label="Question name"
                        variant="outlined"
                        fullWidth
                        sx={{ mb: 2 }}
                        value={questionName}
                        onChange={(event) => setQuestionName(event.target.value)}
                        multiline
                        maxRows={5}
                        required
                    />
                    {answers.map((input, index) => (
                        <Box key={input.id} display="flex" alignItems="center" mb={2}>
                            <Checkbox
                                size="medium"
                                name="isCorrect"
                                checked={input.isCorrect}
                                onChange={(event) => handleCheckChange(event, index)}
                                sx={{ mr: 1.5 }}
                            />
                            <TextField
                                required
                                placeholder="Answer is: "
                                variant="outlined"
                                fullWidth
                                multiline
                                maxRows={5}
                                name="name"
                                value={input.name}
                                onChange={(event) => handleInputChange(event, index)}
                            />
                            {answers.length > 2 && (
                                <IconButton sx={{ ml: 1.5 }} onClick={() => handleDeleteField(index)}>
                                    <Cancel />
                                </IconButton>
                            )}
                        </Box>
                    ))}
                    <Button
                        variant="contained"
                        sx={{ borderRadius: 2, py: 2, px: 5, mt: 1 }}
                        color="primary"
                        onClick={addMoreAnswer}
                        fullWidth
                        disabled={answers.length === 8}
                    >
                        Thêm câu trả lời
                    </Button>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} variant="contained" color="error">
                    Hủy bỏ
                </Button>
                <Button onClick={handleReset} variant="contained" color="warning">
                    Thiết lập ban đầu
                </Button>
                <Button onClick={handleSubmit} variant="contained">
                    Lưu
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Modal