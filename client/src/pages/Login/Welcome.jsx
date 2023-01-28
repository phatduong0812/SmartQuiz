import { Box } from '@mui/material'

const Welcome = ({ src, size }) => {
    return (
        <Box
            width="1"
            height="92.75vh"
            sx={{
                backgroundImage: `url(${src})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: size,
            }}
        />
    )
}

export default Welcome
