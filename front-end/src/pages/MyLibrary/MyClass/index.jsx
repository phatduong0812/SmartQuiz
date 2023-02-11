import React from 'react'

import { Box } from '@mui/material'
import ListClassCard from '~/components/ListClassCard'

import { Mock_Data } from '~/Mock'

const MyClass = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#eef2ff',
                width: '80%',
                mt: 5,
                position: 'absolute',
            }}
        >
            <ListClassCard studySets={Mock_Data.myClass} md={3} />
        </Box>
    )
}

export default MyClass
