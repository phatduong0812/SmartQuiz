import { Box } from '@mui/material'

import Footer from '../Common/Footer'
import Header from '../Common/Header'

const Layout = ({ children }) => {
    return (
        <Box minWidth="100vh">
            <Header />
            {children}
            <Footer />
        </Box>
    )
}

export default Layout
