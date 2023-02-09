import React, { useState } from 'react'

import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Avatar, Box, Tab, Typography } from '@mui/material'
import FullWidthHeaderWhite from '~/components/FullWidthHeaderWhite'

// import logo from '~/assets/images/User 5.png'
import { AppStyles } from '~/constants/styles'
import { useAppSelector } from '~/hooks/redux-hooks'

function padWithLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, '0')
}

const MyLibrary = () => {
    const { username, image, userId } = useAppSelector((state) => state.auth)
    const [index, setIndex] = useState('0')
    const changeIndexHandler = (_, value) => {
        setIndex(value)
    }
    return (
        <FullWidthHeaderWhite maxWidthContent={1670}>
            <Box display="flex" flexDirection="column" width={800}>
                <Box display="flex" alignItems="center">
                    <Box>
                        <Avatar sx={{ height: 80, width: 80 }} src={image} alt="logo" />
                    </Box>
                    <Box ml={2}>
                        <Typography
                            fontWeight={500}
                            sx={{
                                overflow: 'hidden',
                                display: '-webkit-box',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: '1',
                                textOverflow: 'ellipsis',
                                color: 'black',
                                textDecoration: 'none',
                                fontSize: 24,
                            }}
                        >
                            {username}
                        </Typography>
                        <Typography
                            fontWeight={500}
                            variant="body1"
                            sx={{
                                color: AppStyles.colors['#767680'],
                                textDecoration: 'none',
                            }}
                        >
                            ID {padWithLeadingZeros(userId, 6)}
                        </Typography>
                    </Box>
                </Box>

                <Box width="100%">
                    <TabContext value={index}>
                        <TabList onChange={changeIndexHandler} variant="fullWidth">
                            <Tab label="Lớp học của tôi" value={'0'} sx={{ minWidth: 200 }} />
                            <Tab label="Học phần của tôi" value={'1'} sx={{ minWidth: 200 }} />
                            <Tab label="Đã lưu" value={'2'} sx={{ minWidth: 200 }} />
                            <Tab label="Nháp" value={'3'} sx={{ minWidth: 200 }} />
                        </TabList>
                        <TabPanel value={'0'}>
                            <Box
                                sx={{
                                    p: 0,
                                    backgroundColor: '#eef2ff',
                                    width: '100%',
                                    mt: 2,
                                    position: 'absolute',
                                }}
                            >
                                Login
                            </Box>
                        </TabPanel>
                        <TabPanel value={'1'}>Đăng ký</TabPanel>
                        <TabPanel value={'2'}>Đăng ký</TabPanel>
                        <TabPanel value={'3'}>Đăng ký</TabPanel>
                    </TabContext>
                </Box>
            </Box>
        </FullWidthHeaderWhite>
    )
}

export default MyLibrary
