import { Image, Lock } from '@mui/icons-material'
import { Badge, Box, Stack, Typography } from '@mui/material'

const QuestionAction = ({ index }) => {
    return (
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
            <Typography>{index + 1}.</Typography>
            <Stack direction="row" spacing={3}>
                <Badge color="warning" badgeContent={<Lock sx={{ fontSize: 14 }} />}>
                    <Image color="primary" />
                </Badge>
            </Stack>
        </Box>
    )
}

export default QuestionAction
