import React from 'react'

import { Avatar, Box, Typography } from '@mui/material'
import FullWidthHeaderWhite from '~/components/FullWidthHeaderWhite'

import logo from '~/assets/images/User 5.png'
import { AppStyles } from '~/constants/styles'

const MyLibrary = () => {
    return (
        <FullWidthHeaderWhite maxWidthContent={1670}>
            <Box display="flex" alignItems="center" width={600}>
                <Box>
                    <Avatar sx={{ height: 80, width: 80 }} src={logo} alt="logo" />
                </Box>
                <Box ml={2}>
                    <Typography
                        fontWeight={500}
                        sx={{
                            color: 'black',
                            textDecoration: 'none',
                            fontSize: 24,
                        }}
                    >
                        Quang Minh
                    </Typography>
                    <Typography
                        fontWeight={500}
                        variant="body1"
                        sx={{
                            color: AppStyles.colors['#767680'],
                            textDecoration: 'none',
                        }}
                    >
                        ID 1231231
                    </Typography>
                </Box>
            </Box>
        </FullWidthHeaderWhite>
    )
}

export default MyLibrary
