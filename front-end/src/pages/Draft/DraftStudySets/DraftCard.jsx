import React from 'react'

import { Link } from 'react-router-dom'

import { CardContent, Typography } from '@mui/material'
import CardLayout from '~/components/CardLayout'

import { AppStyles } from '~/constants/styles'

const DraftCard = ({ studyset }) => {
    const CardLayoutStyle = {
        mb: 1.5,
        borderRadius: 1,
        p: 1,
        height: 79,
        width: 860,
    }
    return (
        <CardLayout style={CardLayoutStyle}>
            <CardContent>
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: 20,
                        fontWeight: 700,
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: '1',
                        textOverflow: 'ellipsis',
                        userSelect: 'none',
                        cursor: 'pointer',
                        color: 'black',
                        textDecoration: 'none',
                        ':hover': {
                            color: AppStyles.colors['#FFAF00'],
                        },
                    }}
                    component={Link}
                    to="/"
                >
                    {studyset.name}
                </Typography>
            </CardContent>
        </CardLayout>
    )
}

export default DraftCard
