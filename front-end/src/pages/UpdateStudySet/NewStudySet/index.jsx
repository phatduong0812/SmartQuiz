import { memo } from 'react'

import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import { Box, InputBase } from '@mui/material'

import SelectField from './SelectField/index'

import { levelSchool } from '~/Mock'
import { AppStyles } from '~/constants/styles'
import { useAppSelector } from '~/hooks/redux-hooks'

const NewStudySet = ({ infoStudySetHandler, infoStudySet }) => {
    const {
        titleChangeHandler,
        levelChangeHandler,
        universityNameChangeHandler,
        classChangeHandler,
        subjectChangeHandler,
    } = infoStudySetHandler

    const { schoolLevel, isUniversity, universityName, classLevel, subject, title } = infoStudySet
    const universitiesName = useAppSelector((state) => state.schools)
    const grades = useAppSelector((state) => state.grades)
    const subjects = useAppSelector((state) => state.subjects)
    return (
        <Box sx={{ backgroundColor: AppStyles.colors['#004DFF'], p: 4, mt: 5, borderRadius: 2 }}>
            <Box display="flex" alignItems="flex-end" mb={1} ml={3} maxWidth="50%">
                <InputBase
                    placeholder="Tiêu đề"
                    type="text"
                    sx={{
                        borderBottom: `0.5px solid #fefefe`,
                        pl: 2,
                        py: 1.4,
                        '& ::placeholder': {
                            color: AppStyles.colors['#FAFBFF'],
                        },
                        color: AppStyles.colors['#FFAF00'],
                        mr: 2.4,
                        fontSize: 32,
                    }}
                    fullWidth
                    onChange={titleChangeHandler}
                    value={title}
                    className="text-field"
                    required
                />
                <DriveFileRenameOutlineIcon sx={{ color: '#FFFFFF' }} />
            </Box>
            <Box sx={{ mt: 3 }} display="flex">
                <SelectField
                    onChange={levelChangeHandler}
                    label="Cấp học"
                    isRequired={true}
                    value={schoolLevel}
                    isDisable={false}
                    data={levelSchool}
                />
                <SelectField
                    label="Tên trường"
                    isRequired={true}
                    isDisable={isUniversity ? false : true}
                    value={universityName}
                    onChange={universityNameChangeHandler}
                    data={universitiesName}
                />
                <SelectField
                    label="Lớp"
                    isRequired={true}
                    isDisable={isUniversity ? true : false}
                    value={classLevel}
                    onChange={classChangeHandler}
                    data={schoolLevel.value === 2 ? grades.secondarySchool : grades.highSchool}
                />
                <SelectField
                    label="Môn học"
                    isRequired={true}
                    isDisable={isUniversity ? true : !classLevel.value ? true : false}
                    value={subject}
                    onChange={subjectChangeHandler}
                    data={schoolLevel.value === 2 ? subjects.secondarySubjects : subjects.highSchoolSubjects}
                />
            </Box>
        </Box>
    )
}

export default memo(NewStudySet)
