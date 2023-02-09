import React from 'react'

import { Avatar, Box, Typography } from '@mui/material'
import FullWidthHeaderWhite from '~/components/FullWidthHeaderWhite'

// import logo from '~/assets/images/User 5.png'
import { AppStyles } from '~/constants/styles'
import { useAppSelector } from '~/hooks/redux-hooks'

const MyLibrary = () => {
    const { username, image, userId } = useAppSelector((state) => state.auth)

    return (
        <FullWidthHeaderWhite maxWidthContent={1670}>
            <Box display="flex" alignItems="center" width={600}>
                <Box>
                    <Avatar sx={{ height: 80, width: 80 }} src={image} alt="logo" />
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
                        {username}
                    </Typography>
                    <Typography
                        fontWeight={500}
                        variant="body1"
                        sx={{
                            color: AppStyles.colors['#767680'],
                            textDecoration: 'none',
                        }}
                    >
                        ID {userId}
                    </Typography>
                </Box>
            </Box>
        </FullWidthHeaderWhite>
    )
}

export default MyLibrary
