import { Link } from 'react-router-dom'

import MediaButton from './../../components/MediaButton/index'
import { Box, Button, Typography } from '@mui/material'

import Input from './Input'

import GoogleIcon from '~/assets/images/google-icon.png'
import { AppStyles } from '~/constants/styles'

const SigninForm = () => {
    return (
        <Box width="1" mt={5}>
            <MediaButton src={GoogleIcon} />
            <Typography textAlign="center" sx={{ my: 5, color: AppStyles.colors['#767680'] }}>
                Hoặc
            </Typography>
            <label>Tên Đăng nhập</label>
            <Input label="Tên đăng nhập" placeholder="Example@gmail.com" />
            <Box display="flex" justifyContent="space-between" mt={3}>
                <label>Mật khẩu</label>
                <Typography
                    component={Link}
                    to="/forgot-password"
                    sx={{ color: AppStyles.colors['#767680'] }}
                    variant="body1"
                >
                    Quên mật khẩu?
                </Typography>
            </Box>
            <Input label="Mật khẩu" placeholder="Nhập mật khẩu của bạn" />
            <Button fullWidth variant="contained" sx={{ py: 2.5, mt: 4, borderRadius: 2.25 }}>
                Đăng nhập
            </Button>
        </Box>
    )
}

export default SigninForm
