import React from 'react'

import { Link } from 'react-router-dom'

import { NotificationsNone } from '@mui/icons-material'
import { Badge, Box, IconButton } from '@mui/material'

import { AppStyles } from '~/constants/styles'

const Notification = () => {
    return (
        <Box ml={4} component={Link} to="/notification" sx={{ textDecoration: ' none' }}>
            <IconButton component="label" size="small">
                <Badge color="secondary" max={99}>
                    <NotificationsNone fontSize="medium" sx={{ color: AppStyles.colors['#004DFF'] }} />
                </Badge>
            </IconButton>
        </Box>
    )
}

export default Notification
