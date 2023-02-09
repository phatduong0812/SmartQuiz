import React from 'react'

import { Grid } from '@mui/material'

import ClassCard from './ClassCard'

const ListClassCard = ({ studySets, md }) => {
    return (
        <Grid container rowSpacing={2} columnSpacing={3} display="flex">
            {studySets.map((studySet) => (
                <ClassCard key={studySet.id} studySet={studySet} md={md} />
            ))}
        </Grid>
    )
}

export default ListClassCard
