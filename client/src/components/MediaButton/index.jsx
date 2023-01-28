import { Avatar, Box, Paper, Typography } from '@mui/material'

import { AppStyles } from '~/constants/styles'

const MediaButton = ({ src }) => {
    return (
        <Box
            width="1"
            component={Paper}
            borderRadius={2.25}
            elevation={1}
            py={1.8}
            px={2.4}
            textAlign="center"
            display="flex"
            alignItems="center"
            position={'relative'}
            sx={{
                cursor: 'pointer',
                '&:hover': {
                    opacity: 0.75,
                },
                transition: 'all 0.3s',
                backgroundColor: AppStyles.colors['#FAFBFF'],
            }}
        >
            <Avatar sx={{ width: 32, height: 32, justifySelf: 'flex-start' }} src={src} />
            <Typography
                variant="body1"
                sx={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }}
            >
                Đăng nhập với Google
            </Typography>
        </Box>
    )
}

export default MediaButton
