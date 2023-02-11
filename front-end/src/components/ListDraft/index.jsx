import React from 'react'

import { Grid } from '@mui/material'

import DraftCard from './DraftCard'

const ListDraft = ({ studySets }) => {
    return (
        <Grid container rowSpacing={2} columnSpacing={3} display="flex">
            {studySets.map((studySet) => (
                <DraftCard key={studySet.id} studySet={studySet} />
            ))}
        </Grid>
    )
}

export default ListDraft
