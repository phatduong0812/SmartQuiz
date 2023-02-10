import { Box, Typography } from '@mui/material'
import ListClassCard from '~/components/ListClassCard'

const ClassList = ({ title, studySets }) => {
    return (
        <Box mt={4}>
            <Typography
                textAlign={'left'}
                variant="h6"
                fontWeight={500}
                sx={{
                    color: 'black',
                    pb: 0.125,
                    mb: 2,
                    fontFamily: 'Roboto !important',
                }}
            >
                {title}
            </Typography>
            <ListClassCard studySets={studySets} md={4} />
        </Box>
    )
}

export default ClassList
