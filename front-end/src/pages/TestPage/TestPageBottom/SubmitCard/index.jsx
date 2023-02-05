import React from 'react'

import { Box, CardContent, Typography } from '@mui/material'
import ButtonCompo from '~/components/ButtonCompo'
import CardLayout from '~/components/CardLayout'

import { AppStyles } from '~/constants/styles'

const SubmitCard = ({ questions }) => {
    const CardLayoutStyle = {
        borderRadius: 3,
        p: 1,
        backgroundColor: AppStyles.colors['#004DFF'],
        height: 266,
    }
    const ButtonStyle1 = {
        color: 'white',
        borderColor: 'white',
        ':hover': {
            borderColor: 'white',
        },
        height: 64,
        minWidth: 235,
    }
    const ButtonStyle2 = {
        color: AppStyles.colors['#004DFF'],
        backgroundColor: AppStyles.colors['#EEF2FF'],
        ':hover': {
            bgcolor: '#d6d9e5',
        },
        height: 64,
        minWidth: 235,
    }
    return (
        <CardLayout style={CardLayoutStyle}>
            <CardContent>
                <Box display="flex" alignItems="center">
                    <Typography sx={{ color: 'white', fontSize: 20 }}>Thời gian</Typography>
                    <Typography sx={{ ml: 2, color: AppStyles.colors['#FFAF00'], fontSize: 36 }}>24:55</Typography>
                </Box>
                <Box display="flex" alignItems="center" mt={1}>
                    <Typography sx={{ color: 'white', fontSize: 20 }}>Đã trả lời</Typography>
                    <Box display="flex" alignItems="center">
                        <Typography sx={{ ml: 2, color: AppStyles.colors['#FFAF00'], fontSize: 36 }}>3</Typography>
                        <Typography sx={{ color: 'white', fontSize: 36 }}>/{questions.length}</Typography>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="space-between" mt={3.5}>
                    <ButtonCompo variant="outlined" style={ButtonStyle1}>
                        Tạm dừng
                    </ButtonCompo>
                    <ButtonCompo variant="contained" style={ButtonStyle2}>
                        Nộp bài
                    </ButtonCompo>
                </Box>
            </CardContent>
        </CardLayout>
    )
}

export default SubmitCard
