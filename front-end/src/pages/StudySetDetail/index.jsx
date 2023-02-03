import { Box } from '@mui/material'

import DetailHeader from './DetailHeader'
import Questions from './Questions'

import { Mock_Data } from '~/Mock'

const StudySetDetail = () => {
    return (
        <Box maxWidth={1112} sx={{ m: '0 auto', mt: 5, mb: 9 }}>
            <DetailHeader numberQuestion={Mock_Data.question} />
            <Questions questions={Mock_Data.question} />
        </Box>
    )
}

export default StudySetDetail
