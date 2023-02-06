import { Box, Typography } from '@mui/material'

import DraftList from './DraftStudySets'

import LocalStorageUtils from '~/utils/LocalStorageUtils'

const Draft = () => {
    const draftQuestions = LocalStorageUtils.getItem('drafts')
    return (
        <Box maxWidth={1390} container spacing={4} sx={{ m: '0 auto', mt: 2, mb: 5 }}>
            <Typography mb={5} variant="h4" sx={{ fontWeight: 'bold' }}>
                Your Draft
            </Typography>
            <DraftList studysets={draftQuestions} />
        </Box>
    )
}

export default Draft
