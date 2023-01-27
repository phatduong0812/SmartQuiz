import React from 'react'

import { Link } from 'react-router-dom'

import { Avatar, Box, Button, Typography } from '@mui/material'

import Crown from '~/assets/images/Crown.png'
import banner from '~/assets/images/Rectangle-3.png'
import logoBanner from '~/assets/images/Vector.png'
import { AppStyles } from '~/constants/styles'

const Banner = () => {
    return (
        <Box
            height={240}
            display="flex"
            style={{
                backgroundImage: `url(${banner})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <Box display="flex" width="100%">
                <Box
                    sx={{
                        backgroundColor: AppStyles.colors['#0045e5'],
                        width: '60%',
                        height: '96%',
                        borderRadius: 4,
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 100,
                    }}
                />
                <Box
                    display="flex"
                    sx={{
                        backgroundColor: AppStyles.colors['#0045e5'],
                        width: '15%',
                        height: '96%',
                        borderRadius: 4,
                        transform: 'skew(-20deg)',
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 100,
                        ml: -10,
                    }}
                >
                    <Typography
                        sx={{
                            color: AppStyles.colors['#CCDBFF'],
                            width: '15%',
                            fontSize: '220px',
                            transform: 'skew(20deg)',
                            ml: -50,
                            mt: -9,
                            opacity: 0.2,
                            userSelect: 'none',
                        }}
                    >
                        -50%
                    </Typography>
                    <Box mt={2} ml={4} display="flex" flexDirection="column" sx={{ transform: 'skew(20deg)' }}>
                        <Typography textAlign="left" sx={{ userSelect: 'none' }}>
                            Trãi nghiệm
                        </Typography>
                        <Box display="flex" alignItems="center">
                            <Box
                                mt={-1}
                                component="img"
                                alt="CQUIZ"
                                src={logoBanner}
                                draggable={false}
                                sx={{
                                    aspectRatio: '16 / 9',
                                    objectFit: 'contain',
                                }}
                            />
                            <Button
                                sx={{
                                    color: AppStyles.colors['#000F33'],
                                    ml: 3,
                                    borderRadius: '12px',
                                    pr: 3,
                                    backgroundColor: AppStyles.colors['#FEDA01'],
                                    ':hover': {
                                        bgcolor: '#e4c400',
                                        color: AppStyles.colors['#000F33'],
                                    },
                                }}
                                draggable={false}
                                variant="contained"
                                startIcon={<Avatar src={Crown} />}
                                component={Link}
                                to="/dang-nhap"
                            >
                                <Typography variant="h6">PREMIUM</Typography>
                            </Button>
                        </Box>
                        <Typography mt={4} variant="caption" textAlign="left" sx={{ userSelect: 'none' }}>
                            (*) Chương trình chỉ áp dụng cho thành viên mới
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Banner
