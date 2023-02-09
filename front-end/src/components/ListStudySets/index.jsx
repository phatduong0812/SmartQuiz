import { Grid } from '@mui/material'

import StudyCard from './StudyCard'

const ListStudySets = ({ studySets, md }) => {
    return (
        <Grid container rowSpacing={2} columnSpacing={3} display="flex">
            {studySets.map((studySet) => (
                <StudyCard key={studySet.id} studySet={studySet} md={md} />
            ))}
        </Grid>
    )
}

export default ListStudySets
