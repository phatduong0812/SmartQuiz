import React from 'react'

import { FeedRounded, PersonRounded, TopicRounded } from '@mui/icons-material'
import { Box, Paper, Typography } from '@mui/material'

import TableContent from './TableContent'

import { AppStyles } from '~/constants/styles'

const PopularTable = ({ studySet }) => {
    return (
        <Box>
            <Typography
                textAlign={'left'}
                variant="h6"
                fontWeight={600}
                sx={{
                    color: 'black',
                    pb: 0.125,
                    mb: 2,
                }}
            >
                Nổi bật trong tuần
            </Typography>

            <Paper elevation={0} sx={{ borderRadius: 2.5, backgroundColor: AppStyles.colors['#FAFBFF'] }}>
                <Box alignItems="center" justifyContent="space-around" display="flex">
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            '& > .active > span': {
                                color: AppStyles.colors['#004DFF'],
                            },
                        }}
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            sx={{
                                flex: 1,
                                px: 4,
                                py: 2,
                                mr: 2,
                                textDecoration: 'none',
                                color: AppStyles.colors['#767680'],
                                position: 'relative',
                                fontFamily: 'Roboto',
                                ':hover': {
                                    bgcolor: AppStyles.colors['#004DFF'],
                                    color: AppStyles.colors['#FFFFFF'],
                                },
                                cursor: 'pointer',
                            }}
                        >
                            <FeedRounded fontSize="medium" />
                            <Typography component="span" variant="body1" sx={{ ml: 1, fontWeight: 600 }}>
                                Học phần
                            </Typography>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            sx={{
                                flex: 1,
                                px: 4,
                                py: 2,
                                textDecoration: 'none',
                                color: AppStyles.colors['#767680'],
                                position: 'relative',
                                fontFamily: 'Roboto',
                                ':hover': {
                                    bgcolor: AppStyles.colors['#004DFF'],
                                    color: AppStyles.colors['#FFFFFF'],
                                },
                                cursor: 'pointer',
                            }}
                        >
                            <TopicRounded fontSize="medium" />
                            <Typography component="span" variant="body1" sx={{ fontWeight: 600 }}>
                                Thư mục
                            </Typography>
                        </Box>
                        <Box
                            display="flex"
                            alignItems="center"
                            sx={{
                                flex: 1,
                                px: 4,
                                py: 2,
                                textDecoration: 'none',
                                color: AppStyles.colors['#767680'],
                                position: 'relative',
                                ml: 2,
                                fontFamily: 'Roboto',
                                ':hover': {
                                    bgcolor: AppStyles.colors['#004DFF'],
                                    color: AppStyles.colors['#FFFFFF'],
                                },
                                cursor: 'pointer',
                            }}
                        >
                            <PersonRounded fontSize="medium" />
                            <Typography component="span" variant="body1" sx={{ fontWeight: 600 }}>
                                Tác giả
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Paper>

            <Paper
                elevation={1}
                sx={{ mt: 2, borderRadius: 2.5, height: '100%', backgroundColor: AppStyles.colors['#FAFBFF'] }}
            >
                <TableContent studySet={studySet} />
            </Paper>
        </Box>
    )
}

export default PopularTable
