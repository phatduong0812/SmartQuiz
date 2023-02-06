import React from 'react'

import { Link } from 'react-router-dom'

import { Edit, Quiz } from '@mui/icons-material'
import { Box, Button, IconButton, Typography } from '@mui/material'

import { AppStyles } from '~/constants/styles'

const DetailHeader = ({ info, id }) => {
    return (
        <React.Fragment>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                {info.name}
            </Typography>
            <Box display="flex" mt={2}>
                <Button
                    variant="outlined"
                    sx={{
                        mr: 2,
                        color: 'black',
                        borderRadius: 1.5,
                        pr: 4,
                        justifyContent: 'flex-start',
                        textTransform: 'none',
                        backgroundColor: AppStyles.colors['#CCDBFF'],
                        ':hover': {
                            bgcolor: '#b7c5e5',
                        },
                    }}
                    component={Link}
                    to={`/study-sets/${id}/test`}
                >
                    <IconButton
                        aria-label="create"
                        size="large"
                        sx={{
                            p: 0,
                        }}
                    >
                        <Quiz fontSize="inherit" sx={{ color: AppStyles.colors['#004DFF'] }} />
                    </IconButton>
                    <Typography ml={1} sx={{ fontWeight: 500 }}>
                        Kiểm tra
                    </Typography>
                </Button>
                <Button
                    variant="outlined"
                    sx={{
                        mr: 2,
                        color: 'black',
                        borderRadius: 1.5,
                        pr: 4,
                        justifyContent: 'flex-start',
                        textTransform: 'none',
                        backgroundColor: AppStyles.colors['#CCDBFF'],
                        ':hover': {
                            bgcolor: '#b7c5e5',
                        },
                    }}
                    component={Link}
                    to={`/study-sets/${id}/update`}
                >
                    <IconButton
                        aria-label="create"
                        size="large"
                        sx={{
                            p: 0,
                        }}
                    >
                        <Edit fontSize="inherit" sx={{ color: AppStyles.colors['#004DFF'] }} />
                    </IconButton>
                    <Typography ml={1} sx={{ fontWeight: 500 }}>
                        Chỉnh sửa
                    </Typography>
                </Button>
            </Box>
            <Box display="flex" mt={4}>
                <Typography
                    textAlign={'left'}
                    variant="body1"
                    color="text.secondary"
                    sx={{
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: '2',
                        textOverflow: 'ellipsis',
                        fontSize: 14,
                        userSelect: 'none',
                    }}
                >
                    Người tạo
                </Typography>
                <Typography ml={0.5} variant="body1" color="text.secondary" sx={{ fontWeight: 'bold', fontSize: 14 }}>
                    {info.creator}
                </Typography>
            </Box>
            <Typography mt={5} variant="h5" sx={{ fontWeight: 'bold' }}>
                Số lượng câu ({info.questions.length})
            </Typography>
        </React.Fragment>
    )
}

export default DetailHeader
