import { useState } from 'react'

import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Grid, Tab } from '@mui/material'

import SigninForm from './SigninForm'
import Welcome from './Welcome'

import LoginImage from '~/assets/images/LoginImage.png'

const Login = () => {
    const [index, setIndex] = useState(0)

    const changeIndexHandler = (_, value) => {
        setIndex(value)
    }
    return (
        <Grid container>
            <Grid item xs={6}>
                <Welcome src={LoginImage} size="cover" />
            </Grid>
            <Grid item xs={6}>
                <Box display="flex" alignItems="center" justifyContent="center" height="100%">
                    <Box sx={{ width: '100%', maxWidth: 560 }}>
                        <TabContext value={index}>
                            <TabList onChange={changeIndexHandler} variant="fullWidth">
                                <Tab label="Đăng nhập" value={0} />
                                <Tab label="Đăng ký" value={1} />
                            </TabList>
                            <TabPanel value={0} sx={{ p: 0 }}>
                                <SigninForm />
                            </TabPanel>
                            <TabPanel value={1}>Đăng ký</TabPanel>
                        </TabContext>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Login
