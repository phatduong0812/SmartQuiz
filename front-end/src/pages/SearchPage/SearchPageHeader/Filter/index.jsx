import React, { useState } from 'react'

import { FormControl, MenuItem, Select, Typography } from '@mui/material'

import { AppStyles } from '~/constants/styles'

const Filter = ({ data, title }) => {
    const [filter, setFilter] = useState(5)

    const handleChange = (event) => {
        setFilter(event.target.value)
    }
    return (
        <React.Fragment>
            <Typography
                textAlign={'left'}
                variant="body1"
                fontWeight={500}
                sx={{
                    color: AppStyles.colors['#333333'],
                    pb: 0.125,
                    mb: 1,
                    fontFamily: 'Roboto !important',
                }}
            >
                {title}
            </Typography>

            <FormControl sx={{ height: 48, width: 260 }}>
                <Select
                    value={filter}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{ pl: 1, bgcolor: AppStyles.colors['#EEF2FF'], borderRadius: 3 }}
                >
                    {data?.map((option, index) => (
                        <MenuItem key={index} value={option.id}>
                            {option.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </React.Fragment>
    )
}

export default Filter
