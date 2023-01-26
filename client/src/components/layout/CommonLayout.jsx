import React from 'react'

import { Box, Container } from '@mui/material'

import Footer from '../Common/Footer'
import Header from '../Common/Header'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <Box minHeight="60vh">
                <Container maxWidth="lg"> {children}</Container>
            </Box>
            <Footer />
        </React.Fragment>
    )
}

export default Layout
