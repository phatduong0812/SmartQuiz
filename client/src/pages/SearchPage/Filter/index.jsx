import React, { useState } from 'react'

import { FormControl, MenuItem, Select } from '@mui/material'

import { AppStyles } from '~/constants/styles'

const Filter = ({ data }) => {
    const [filter, setFilter] = useState('')

    const handleChange = (event) => {
        setFilter(event.target.value)
    }
    return (
        <FormControl sx={{ height: 48, width: 260 }}>
            <Select
                value={filter}
                onChange={handleChange}
                variant="outlined"
                sx={{ bgcolor: AppStyles.colors['#E6EDFF'], borderRadius: 3 }}
            >
                {data?.map((option, index) => (
                    <MenuItem key={index} value={option.id}>
                        {option.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default Filter
