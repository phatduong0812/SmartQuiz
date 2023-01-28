import React from 'react'

import { Box } from '@mui/material'

// import Footer from '../Common/Footer'
import Header from '../Common/Header'

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <Box minHeight="100vh" maxWidth={1660} sx={{ m: '0 auto', pt: 8 }}>
                {children}
            </Box>
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default Layout
