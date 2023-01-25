import React from 'react'

import { Link } from 'react-router-dom'

import { NotificationsNone } from '@mui/icons-material'
import { Badge, Box, IconButton } from '@mui/material'

import { AppStyles } from '~/constants/styles'

const Notification = () => {
    return (
        <Box component={Link} to="/notification" sx={{ textDecoration: ' none' }}>
            <IconButton component="label" size="small" sx={{ ml: 3 }}>
                <Badge color="secondary" max={99}>
                    <NotificationsNone fontSize="large" sx={{ color: AppStyles.colors.blue200 }} />
                </Badge>
            </IconButton>
        </Box>
    )
}

export default Notification
