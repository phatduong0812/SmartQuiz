import React from 'react'

import { Grid } from '@mui/material'

import { AppStyles } from '~/constants/styles'

const FullWidthHeaderWhite = ({ children, maxWidthContent, style }) => {
    return (
        <Grid container sx={{ backgroundColor: AppStyles.colors['#FAFBFF'] }}>
            <Grid maxWidth={maxWidthContent} container sx={{ m: '0 auto', mt: 2, ...style }}>
                {children}
            </Grid>
        </Grid>
    )
}

export default FullWidthHeaderWhite
