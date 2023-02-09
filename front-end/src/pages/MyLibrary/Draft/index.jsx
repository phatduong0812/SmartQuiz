import React from 'react'

import { Box } from '@mui/material'

import Create from './Create'
import Update from './Update'

import { Mock_Data } from '~/Mock'

const Draft = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#eef2ff',
                width: '80%',
                mt: 5,
                position: 'absolute',
            }}
        >
            <Create title="Tạo mới" studySets={Mock_Data.myClass} />
            <Update title="Cập nhật" studySets={Mock_Data.yourSet} />
        </Box>
    )
}

export default Draft
