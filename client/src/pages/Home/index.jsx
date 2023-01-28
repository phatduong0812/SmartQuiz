import React from 'react'

import { Grid } from '@mui/material'

import Banner from './Banner'
import PopularTable from './PopularTable'

import { Mock_Data } from '~/Mock'
import StudySetCards from '~/pages/Home/StudySetCards'

const Home = () => {
    return (
        <Grid maxWidth={1660} container spacing={3} columnSpacing={4} sx={{ pt: 2, m: '0 auto' }}>
            <Grid item xs={12} md={8} lg={8}>
                <Banner />
                <StudySetCards title="Đã xem gần đây" studySets={Mock_Data.recent} />
                <StudySetCards title="Học phần của bạn" studySets={Mock_Data.yourSet} />
                <StudySetCards title="Gợi ý cho bạn" studySets={Mock_Data.reccomend} />
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
                <PopularTable studySet={Mock_Data.recent} />
            </Grid>
        </Grid>
    )
}

export default Home
