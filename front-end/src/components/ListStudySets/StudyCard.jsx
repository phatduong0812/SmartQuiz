import { Link } from 'react-router-dom'

import { GppGood, Groups2, Star } from '@mui/icons-material'
import { Box, CardContent, Grid, Typography } from '@mui/material'

import CardLayout from '../CardLayout'
import MoreMenu from '../MoreMenu'

import { AppStyles } from '~/constants/styles'

const CardLayoutStyle = {
    maxWidth: 392,
    borderRadius: 3,
}

const StudyCard = ({ studySet }) => {
    return (
        <Grid item md={3}>
            <CardLayout style={CardLayoutStyle}>
                <CardContent>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Box display="flex" alignItems="center">
                            <Typography
                                variant="body1"
                                fontWeight={600}
                                sx={{
                                    overflow: 'hidden',
                                    display: '-webkit-box',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: '1',
                                    textOverflow: 'ellipsis',
                                    userSelect: 'none',
                                    cursor: 'pointer',
                                    color: 'black',
                                    textDecoration: 'none',
                                }}
                                component={Link}
                                to={`/study-sets/${studySet.id}`}
                            >
                                {/* {studySet?.StudySetName} */}
                                {studySet.name}
                            </Typography>
                            {Math.random() < 0.5 && (
                                <GppGood
                                    fontSize="small"
                                    sx={{ ml: 1, mt: -0.5, color: AppStyles.colors['#004DFF'] }}
                                />
                            )}
                        </Box>
                        <MoreMenu />
                    </Box>
                    <Box display="flex">
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
                        <Typography
                            ml={0.5}
                            variant="body1"
                            color="text.secondary"
                            sx={{ fontWeight: 'bold', fontSize: 14, userSelect: 'none' }}
                        >
                            {studySet?.creator}
                        </Typography>
                    </Box>
                    <Box display="flex" mt={2} textAlign={'left'}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Groups2 fontSize="small" sx={{ color: AppStyles.colors['#767680'] }} />
                            <Typography
                                ml={1}
                                sx={{
                                    color: AppStyles.colors['#767680'],
                                    fontSize: 14,
                                    fontWeight: 400,
                                    userSelect: 'none',
                                }}
                            >
                                0
                            </Typography>
                        </Box>
                        <Box ml={2} display="flex" alignItems="center" justifyContent="center">
                            <Star fontSize="small" sx={{ color: AppStyles.colors['#767680'] }} />
                            <Typography
                                ml={1}
                                sx={{
                                    color: AppStyles.colors['#767680'],
                                    fontSize: 14,
                                    fontWeight: 400,
                                    userSelect: 'none',
                                }}
                            >
                                {studySet?.gradeName}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </CardLayout>
        </Grid>
    )
}

export default StudyCard
