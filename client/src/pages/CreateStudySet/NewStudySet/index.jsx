import { memo } from 'react'

import moment from 'moment'

import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline'
import { Box, InputBase, Typography } from '@mui/material'

import SelectField from './SelectField/index'

import {
    highSchool,
    highSchoolSubjects,
    levelSchool,
    secondarySchool,
    secondarySubjects,
    universitiesName,
} from '~/Mock'
import { AppStyles } from '~/constants/styles'

const NewStudySet = ({ infoStudySetHandler, infoStudySet }) => {
    const {
        titleChangeHandler,
        levelChangeHandler,
        universityNameChangeHandler,
        classChangeHandler,
        subjectChangeHandler,
    } = infoStudySetHandler

    const { schoolLevel, isUniversity, universityName, classLevel, subject, title } = infoStudySet
    return (
        <Box sx={{ backgroundColor: AppStyles.colors['#004DFF'], p: 4, mt: 5, borderRadius: 2 }}>
            <Box display="flex" alignItems="center" mb={1}>
                <Typography sx={{ color: AppStyles.colors['#FFAF00'], mr: 2.4 }} variant="h4" fontWeight={700}>
                    Học phần mới {moment(new Date()).format('DD/MM/YYYY')}
                </Typography>
                <DriveFileRenameOutlineIcon sx={{ color: '#FFFFFF' }} />
            </Box>
            <InputBase
                placeholder="Mô tả"
                type="text"
                sx={{
                    borderBottom: `0.5px solid #fefefe`,
                    pl: 2,
                    py: 1.4,
                    '&:placeholder': {
                        color: AppStyles.colors['#FAFBFF'],
                    },
                    color: AppStyles.colors['#FAFBFF'],
                }}
                fullWidth
                onChange={titleChangeHandler}
                value={title}
            />
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
                    data={schoolLevel.value === 2 ? secondarySchool : highSchool}
                />
                <SelectField
                    label="Môn học"
                    isRequired={true}
                    isDisable={isUniversity ? true : !classLevel.value ? true : false}
                    value={subject}
                    onChange={subjectChangeHandler}
                    data={schoolLevel.value === 2 ? secondarySubjects : highSchoolSubjects}
                />
            </Box>
        </Box>
    )
}

export default memo(NewStudySet)
