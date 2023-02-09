import React from 'react'

import { Grid } from '@mui/material'

import ClassCard from './ClassCard'

const ListClassCard = ({ studySets }) => {
    return (
        <Grid container rowSpacing={2} columnSpacing={3} display="flex">
            {studySets.map((studySet) => (
                <ClassCard key={studySet.id} studySet={studySet} />
            ))}
        </Grid>
    )
}

export default ListClassCard
