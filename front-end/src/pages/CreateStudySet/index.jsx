import { useEffect, useState } from 'react'

import { AddBox } from '@mui/icons-material'
import { Box, Container, Typography } from '@mui/material'
import ButtonCompo from '~/components/ButtonCompo'

import Modal from './Modal'
import NewStudySet from './NewStudySet'
import Questions from './Questions'

import { Mock_Data, initialValue, level, levelSchool } from '~/Mock'
import { AppStyles } from '~/constants/styles'

const CreateStudySet = () => {
    const [schoolLevel, setSchoolLevel] = useState(levelSchool[0])
    const [isUniversity, setIsUniversity] = useState(false)
    const [universityName, setUniversityName] = useState(initialValue)
    const [classLevel, setClassLevel] = useState(initialValue)
    const [subject, setSubject] = useState(initialValue)
    const [title, setTitle] = useState('')
    const [questions, setQuestions] = useState(Mock_Data.questions)
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
        <Box component="form">
            <Container maxWidth="xl">
                <NewStudySet infoStudySetHandler={infoStudySetHandler} infoStudySet={infoStudySet} />
                <Modal onClose={closeModalHandler} submitQuestionHandler={addQuestionHandler} open={openModal} />
                <Questions questions={questions} deleteQuestionDraft={deleteQuestionDraft} />
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mt={3}
                    py={4}
                    sx={{
                        borderRadius: 4,
                        backgroundColor: AppStyles.colors['#CCDBFF'],
                        transition: 'all 0.3s linear',
                        cursor: 'pointer',
                        '&:hover': {
                            opacity: 0.75,
                        },
                    }}
                    onClick={openModalHandler}
                >
                    <AddBox sx={{ color: AppStyles.colors['#000F33'] }} />
                    <Typography fontWeight={600} variant="h6" sx={{ color: AppStyles.colors['#000F33'], ml: 1 }}>
                        Thêm thẻ mới
                    </Typography>
                </Box>
            </Container>
            <Box sx={{ backgroundColor: AppStyles.colors['#FAFBFF'], mt: 3 }}>
                <Container maxWidth="xl">
                    <Box display="flex" justifyContent="space-between" py={3} alignItems="center">
                        <Box display="flex" alignItems="baseline">
                            <Typography variant="h6" sx={{ color: '#000000', mr: 2, fontWeight: 600 }}>
                                Tổng câu hỏi
                            </Typography>
                            <Typography variant="h5" sx={{ color: '#000000', fontWeight: 600 }}>
                                {questions.length}
                            </Typography>
                        </Box>
                        <Box display="flex">
                            <ButtonCompo
                                variant="outlined"
                                style={{ backgroundColor: AppStyles.colors['#CCDBFF'], mr: 2 }}
                            >
                                Lưu nháp
                            </ButtonCompo>
                            <ButtonCompo variant="contained" style={{ backgroundColor: AppStyles.colors['#004DFF'] }}>
                                Tạo học phần
                            </ButtonCompo>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}

export default CreateStudySet
