import React from 'react'

import { Typography } from '@mui/material'
import ListDraft from '~/components/ListDraft'

const Create = ({ title, studySets }) => {
    return (
        <React.Fragment>
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
            <ListDraft studySets={studySets} md={4} />
        </React.Fragment>
    )
}

export default Create
