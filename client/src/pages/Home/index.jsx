import React from 'react'

import { Box, Grid, Typography } from '@mui/material'

import banner from '~/assets/images/Rectangle-3.png'
import { AppStyles } from '~/constants/styles'

const Home = () => {
    return (
        <React.Fragment>
            <Grid mt={2} container spacing={2}>
                <Grid item xs={12} md={8} lg={8}>
                    <Box
                        display="flex"
                        width="100%"
                        style={{
                            backgroundImage: `url(${banner})`,
                            aspectRatio: '16 / 9',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'contain',
                        }}
                    >
                        <Box display="flex" width="100%">
                            <Box
                                sx={{
                                    backgroundColor: AppStyles.colors.blue300,
                                    width: '60%',
                                    height: '38.5%',
                                    borderRadius: 4,
                                    borderTopRightRadius: 0,
                                    borderBottomRightRadius: 100,
                                }}
                            ></Box>
                            <Box
                                sx={{
                                    backgroundColor: AppStyles.colors.blue300,
                                    width: '15%',
                                    height: '38.5%',
                                    borderRadius: 4,
                                    transform: 'skew(-20deg)',
                                    borderTopRightRadius: 0,
                                    borderBottomRightRadius: 100,
                                    ml: -10,
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: AppStyles.colors.lightGrey100,
                                        width: '15%',
                                        fontSize: '220px',
                                        transform: 'skew(20deg)',
                                        ml: -48,
                                        mt: -9,
                                        opacity: 0.2,
                                    }}
                                >
                                    -50%
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} lg={4}></Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Home
