import { Delete, Image, Lock } from '@mui/icons-material'
import { Badge, Box, IconButton, Stack, Typography } from '@mui/material'

import { AppStyles } from './../../../../constants/styles'

const QuestionAction = ({ index, id, deleteQuestionDraft }) => {
    return (
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography fontWeight={700}>{index + 1}.</Typography>
            <Stack direction="row" spacing={3}>
                <IconButton>
                    <Badge
                        sx={{
                            '& .MuiBadge-badge': {
                                backgroundColor: AppStyles.colors['#FFAF00'],
                            },
                        }}
                        badgeContent={<Lock sx={{ fontSize: 16, color: AppStyles.colors['#004DFF'] }} />}
                    >
                        <Image color="primary" />
                    </Badge>
                </IconButton>
            </Stack>
            <IconButton aria-label="delete" onClick={() => deleteQuestionDraft(id)}>
                <Delete />
            </IconButton>
        </Box>
    )
}

export default QuestionAction
