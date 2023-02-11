import { Box, Typography } from '@mui/material'

import DraftList from './DraftStudySets'

import LocalStorageUtils from '~/utils/LocalStorageUtils'

const Draft = () => {
    const updatetedQuestions = LocalStorageUtils.getItem('update') || { path: '', studySet: [] }
    const createQuestions = LocalStorageUtils.getItem('create') || { path: '', studySet: [] }
    return (
        <Box maxWidth={1390} container spacing={4} sx={{ m: '0 auto', mt: 2, mb: 5 }}>
            <Typography mb={5} variant="h4" sx={{ fontWeight: 'bold' }}>
                Your Draft
            </Typography>
            {updatetedQuestions.studySet.length > 0 && (
                <Box mb={2}>
                    <Typography variant="h5" fontWeight={600} sx={{ mb: 1.5 }}>
                        Updated Drafts
                    </Typography>
                    <DraftList studysets={updatetedQuestions} />
                </Box>
            )}
            {createQuestions.studySet.length > 0 && (
                <Box>
                    <Typography variant="h5" fontWeight={600} sx={{ mb: 1.5 }}>
                        Updated Drafts
                    </Typography>
                    <DraftList studysets={createQuestions} />
                </Box>
            )}
        </Box>
    )
}

export default Draft
