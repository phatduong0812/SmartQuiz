import React from 'react'

import { Avatar, Grid, Typography } from '@mui/material'

import { AppStyles } from '~/constants/styles'

const PageTitle = ({ logo, text }) => {
    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item>
                <Avatar sx={{ height: 50, width: 150 }} src={logo} alt="logo"></Avatar>
            </Grid>
            <Grid item>
                <Typography sx={{ color: AppStyles.colors['#FFAF00'], fontWeight: 700, fontSize: 36 }}>
                    {text}
                </Typography>
            </Grid>
        </Grid>
    )
}

export default PageTitle
