import { Link } from 'react-router-dom'

import { GppGood } from '@mui/icons-material'
import { Avatar, Box, CardContent, Grid, Typography } from '@mui/material'

import CardLayout from '../CardLayout'
import MoreMenu from '../MoreMenu'

import logo from '~/assets/images/User 5.png'
import { AppStyles } from '~/constants/styles'

const CardLayoutStyle = {
    borderRadius: 3,
    boxShadow: '0px 1px 2px rgba(0, 46, 153, 0.3), 0px 1px 3px 1px rgba(0, 46, 153, 0.15)',
}

const StudyCard = ({ studySet }) => {
    return (
        <Grid item md={4}>
            <CardLayout style={CardLayoutStyle}>
                <CardContent>
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                        <Box display="flex" alignItems="center">
                            <Typography
                                variant="body1"
                                fontWeight={500}
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
                            Đại học |
                        </Typography>
                        <Typography
                            ml={0.5}
                            variant="body1"
                            color="text.secondary"
                            sx={{ fontSize: 14, userSelect: 'none' }}
                        >
                            100 câu
                        </Typography>
                    </Box>
                    <Box display="flex" mt={3} textAlign={'left'}>
                        <Avatar sx={{ height: 20, width: 20 }} src={logo} alt="logo" />
                        <Typography
                            ml={1}
                            sx={{
                                color: AppStyles.colors['#767680'],
                                fontSize: 14,
                                fontWeight: 500,
                                userSelect: 'none',
                            }}
                        >
                            {studySet?.creator}
                        </Typography>
                    </Box>
                </CardContent>
            </CardLayout>
        </Grid>
    )
}

export default StudyCard
