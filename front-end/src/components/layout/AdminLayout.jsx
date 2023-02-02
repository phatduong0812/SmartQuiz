import { Box } from '@mui/material'

import Footer from '../Admin/Footer'
import Header from '../Admin/Header'

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
