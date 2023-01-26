import { GppGood, Groups2, Star } from '@mui/icons-material'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'

import MoreMenu from '../MoreMenu'

import { AppStyles } from '~/constants/styles'

const StudyCard = ({ studySet }) => {
    return (
        <Grid item md={3}>
            <Card sx={{ maxWidth: 392, height: '1', backgroundColor: AppStyles.colors['#FAFBFF'], borderRadius: 3 }}>
                <CardContent>
                    <Box display="flex" justifyContent="left">
                        <Typography
                            textAlign={'left'}
                            gutterBottom
                            variant="body1"
                            component="div"
                            fontWeight={600}
                            sx={{ textOverflow: 'clip' }}
                        >
                            {/* {studySet?.StudySetName} */}
                            Toán THPT 2021-2022
                        </Typography>
                        {Math.random() < 0.5 && (
                            <GppGood fontSize="small" sx={{ ml: 1, color: AppStyles.colors['#004DFF'] }} />
                        )}
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
                            }}
                        >
                            Người tạo
                        </Typography>
                        <Typography
                            ml={0.5}
                            variant="body1"
                            color="text.secondary"
                            sx={{ fontWeight: 'bold', fontSize: 14 }}
                        >
                            {studySet?.PersonCreated}
                        </Typography>
                    </Box>
                    <Box display="flex" mt={2} textAlign={'left'}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <Groups2 fontSize="small" sx={{ color: AppStyles.colors['#767680'] }} />
                            <Typography
                                ml={1}
                                sx={{ color: AppStyles.colors['#767680'], fontSize: 14, fontWeight: 400 }}
                            >
                                {studySet?.NumberPeople}
                            </Typography>
                        </Box>
                        <Box ml={2} display="flex" alignItems="center" justifyContent="center">
                            <Star fontSize="small" sx={{ color: AppStyles.colors['#767680'] }} />
                            <Typography
                                ml={1}
                                sx={{ color: AppStyles.colors['#767680'], fontSize: 14, fontWeight: 400 }}
                            >
                                {studySet?.Star}
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default StudyCard
