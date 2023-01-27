import React from 'react'

import { Grid } from '@mui/material'
import StudySetCards from '~/components/StudySetCards'

import Banner from './Banner'
import PopularTable from './PopularTable'

let recent = [
    { StudySetName: 'Sitta canadensis', PersonCreated: 'Arlan', NumberPeople: 35, Star: 5 },
    { StudySetName: 'Felis libyca', PersonCreated: 'Karlen', NumberPeople: 23, Star: 3 },
    { StudySetName: 'unavailable', PersonCreated: 'Warner', NumberPeople: 33, Star: 2 },
    { StudySetName: 'Amblyrhynchus cristatus', PersonCreated: 'Lara', NumberPeople: 44, Star: 4 },
    { StudySetName: 'Eutamias minimus', PersonCreated: 'Karlotta', NumberPeople: 38, Star: 4 },
    { StudySetName: 'Dendrocitta vagabunda', PersonCreated: 'Vail', NumberPeople: 9, Star: 5 },
    { StudySetName: 'Potos flavus', PersonCreated: 'Robinett', NumberPeople: 5, Star: 5 },
    { StudySetName: 'Felis silvestris lybica', PersonCreated: 'Dulcy', NumberPeople: 1, Star: 5 },
]
let yourSet = [
    { StudySetName: 'Sitta canadensis', PersonCreated: 'Arlan', NumberPeople: 35, Star: 5 },
    { StudySetName: 'Felis libyca', PersonCreated: 'Karlen', NumberPeople: 23, Star: 3 },
    { StudySetName: 'unavailable', PersonCreated: 'Warner', NumberPeople: 33, Star: 2 },
    { StudySetName: 'Amblyrhynchus cristatus', PersonCreated: 'Lara', NumberPeople: 44, Star: 4 },
]
let reccomend = [
    { StudySetName: 'Eutamias minimus', PersonCreated: 'Karlotta', NumberPeople: 38, Star: 4 },
    { StudySetName: 'Dendrocitta vagabunda', PersonCreated: 'Vail', NumberPeople: 9, Star: 5 },
    { StudySetName: 'Potos flavus', PersonCreated: 'Robinett', NumberPeople: 5, Star: 5 },
    { StudySetName: 'Felis silvestris lybica', PersonCreated: 'Dulcy', NumberPeople: 1, Star: 5 },
]

const Home = () => {
    return (
        <Grid mt={2} container spacing={3} columnSpacing={4}>
            <Grid item xs={12} md={8} lg={8}>
                <Banner />
                <StudySetCards title="Đã xem gần đây" studySets={recent} />
                <StudySetCards title="Học phần của bạn" studySets={yourSet} />
                <StudySetCards title="Gợi ý cho bạn" studySets={reccomend} />
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
                <PopularTable studySet={recent} />
            </Grid>
        </Grid>
    )
}

export default Home
