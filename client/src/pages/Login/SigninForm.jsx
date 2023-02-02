import { useEffect, useState } from 'react'

import queryString from 'query-string'
import { Link, useLocation } from 'react-router-dom'

import Input from '../../components/Input'
import MediaButton from './../../components/MediaButton/index'
import { Box, Button, Typography } from '@mui/material'

import Loading from '../Loading'
import useAuthAction from './../../features/authSlice/auth-actions'

import { useSnackbar } from '~/HOC/SnackbarContext'
import GoogleIcon from '~/assets/images/google-icon.png'
import { APP_API_URL } from '~/config'
import { AppStyles } from '~/constants/styles'

const SigninForm = () => {
    const { search } = useLocation()
    const { loginHandler } = useAuthAction()
    const { token, error } = queryString.parse(search)
    const [isLoading, setIsLoading] = useState(token ? true : false)
    const showSnackbar = useSnackbar()

    const googleClickHandler = () => {
        window.location.assign(`${APP_API_URL}/api/authentication`)
    }

    useEffect(() => {
        if (error && error === 'inactive-user') {
            showSnackbar({
                severity: 'error',
                children: 'Your email is banned, please contact Admin to unban.',
            })
        } else if (error) {
            showSnackbar({
                severity: 'error',
                children: 'Something went wrong, please try again later.',
            })
        } else if (token) {
            loginHandler(token).catch(() => {
                showSnackbar({
                    severity: 'error',
                    children: 'Something went wrong, please try again later.',
                })
                setIsLoading(false)
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return isLoading ? (
        <Loading />
    ) : (
        <Box width="1" mt={5} component="form">
            <MediaButton src={GoogleIcon} content="Đăng nhập với Google" onClick={googleClickHandler} />
            <Typography textAlign="center" sx={{ my: 5, color: AppStyles.colors['#767680'] }}>
                Hoặc
            </Typography>
            <label>Tên Đăng nhập</label>
            <Input label="Tên đăng nhập" placeholder="Example@gmail.com" isFullwidth={true} />
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
            <Input label="Mật khẩu" placeholder="Nhập mật khẩu của bạn" isFullwidth={true} />
            <Button fullWidth variant="contained" sx={{ py: 2.5, mt: 4, borderRadius: 2.25 }}>
                Đăng nhập
            </Button>
        </Box>
    )
}

export default SigninForm
