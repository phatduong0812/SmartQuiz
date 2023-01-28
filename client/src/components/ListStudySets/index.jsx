import React from 'react'

import { Grid } from '@mui/material'

import StudyCard from './StudyCard'

const ListStudySets = ({ studySets }) => {
    return (
        <Grid container rowSpacing={2} columnSpacing={3} display="flex" justifyContent="center">
            {studySets.map((studySet) => (
                <StudyCard key={studySet.StudySetName} studySet={studySet} />
            ))}
        </Grid>
    )
}

export default ListStudySets
