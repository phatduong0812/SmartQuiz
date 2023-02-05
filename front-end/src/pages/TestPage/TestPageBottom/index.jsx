import React from 'react'

import { Grid } from '@mui/material'

import QuestionList from './QuestionList'
import SubmitCard from './SubmitCard'

// import QuestionCard from './QuestionCard'

const TestPageBottom = ({ questions }) => {
    return (
        <Grid maxWidth={1390} container spacing={4} sx={{ m: '0 auto', mt: 2, mb: 5 }}>
            <Grid item xs={5} md={5} lg={7}>
                <QuestionList questions={questions} />
            </Grid>
            <Grid item xs={5} md={5} lg={5}>
                <SubmitCard questions={questions} />
            </Grid>
        </Grid>
    )
}

export default TestPageBottom
