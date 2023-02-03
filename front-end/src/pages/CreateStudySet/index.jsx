import React, { useEffect, useState } from 'react'

import { AddBox } from '@mui/icons-material'
import { Box, Button, Container } from '@mui/material'

import Modal from './Modal'
import NewStudySet from './NewStudySet'
import Questions from './Questions'

import { initialValue, level, levelSchool } from '~/Mock'
import { AppStyles } from '~/constants/styles'

const CreateStudySet = () => {
    const [schoolLevel, setSchoolLevel] = useState(levelSchool[0])
    const [isUniversity, setIsUniversity] = useState(false)
    const [universityName, setUniversityName] = useState(initialValue)
    const [classLevel, setClassLevel] = useState(initialValue)
    const [subject, setSubject] = useState(initialValue)
    const [title, setTitle] = useState('')
    const [questions, setQuestions] = useState([])
    const [openModal, setOpenModal] = useState(false)

    const addQuestionHandler = (question) => {
        setQuestions((prev) => [...prev, question])
    }

    const openModalHandler = () => {
        setOpenModal(true)
    }

    const closeModalHandler = () => {
        setOpenModal(false)
    }

    const titleChangeHandler = (_, value) => setTitle(value)

    const levelChangeHandler = (name, value) => setSchoolLevel(() => ({ label: name, value: value }))

    const universityNameChangeHandler = (name, value) => setUniversityName(() => ({ label: name, value: value }))

    const classChangeHandler = (name, value) => setClassLevel(() => ({ label: name, value: value }))

    const subjectChangeHandler = (name, value) => setSubject(() => ({ label: name, value: value }))

    const deleteQuestionDraft = (id) => {
        const cloneQuestions = JSON.parse(JSON.stringify(questions))
        const updatedQuestion = cloneQuestions.filter((question) => question.id !== id)
        setQuestions(updatedQuestion)
    }

    const infoStudySetHandler = {
        titleChangeHandler,
        levelChangeHandler,
        universityNameChangeHandler,
        classChangeHandler,
        subjectChangeHandler,
    }

    const infoStudySet = {
        schoolLevel,
        isUniversity,
        universityName,
        classLevel,
        subject,
        title,
        questions,
    }

    useEffect(() => {
        if (schoolLevel.label === level.university) {
            setIsUniversity(true)
        } else {
            setIsUniversity(false)
            if (classLevel.value < 3 && subject.label === 'Hóa') setSubject(initialValue)
        }
        setClassLevel(initialValue)
        setSubject(initialValue)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [schoolLevel])

    return (
        <React.Fragment>
            <Container maxWidth="xl" component="form">
                <NewStudySet infoStudySetHandler={infoStudySetHandler} infoStudySet={infoStudySet} />
                <Box mt={2} display="flex" justifyContent="flex-end">
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: 3,
                            px: 3,
                            backgroundColor: AppStyles.colors['#004DFF'],
                            ':hover': {
                                bgcolor: AppStyles.colors['#0045e5'],
                                color: 'white',
                            },
                        }}
                        onClick={openModalHandler}
                        startIcon={<AddBox sx={{ color: AppStyles.colors['#FFFFFF'] }} />}
                    >
                        Thêm thẻ mới
                    </Button>
                </Box>
                <Modal onClose={closeModalHandler} submitQuestionHandler={addQuestionHandler} open={openModal} />
                <Questions questions={questions} deleteQuestionDraft={deleteQuestionDraft} />
            </Container>
        </React.Fragment>
    )
}

export default CreateStudySet
