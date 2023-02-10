import React from 'react'

// import queryString from 'query-string'
import { useLocation } from 'react-router-dom'

import { FormControl, MenuItem, Select } from '@mui/material'

import { AppStyles } from '~/constants/styles'

const Sort = () => {
    // const history = useHistory()
    const { search: query, pathname } = useLocation()
    // const { sort } = queryString.parse(query)
    // const [type, setType] = React.useState(sort ? sort : 'Newest')
    const [type, setType] = React.useState('Newest')

    const handleChange = (event) => {
        setType(event.target.value)
    }

    // const filterHandler = () => {
    //     let route = pathname + '?'

    //     if (!!type) route += `&sort=${type}`

    //     history.push(route)
    // }

    // useEffect(() => {
    //     filterHandler()
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [type])

    return (
        <FormControl sx={{ minWidth: 260 }}>
            <Select
                value={type}
                variant="outlined"
                onChange={handleChange}
                sx={{
                    pl: 1,
                    bgcolor: AppStyles.colors['#FAFBFF'],
                    borderRadius: 3,
                    boxShadow: '0px 1px 2px rgba(0, 46, 153, 0.3), 0px 1px 3px 1px rgba(0, 46, 153, 0.15)',
                }}
            >
                <MenuItem value={'Newest'}>Gần nhất</MenuItem>
                <MenuItem value={'Oldest'}>Xem nhiều nhất</MenuItem>
            </Select>
        </FormControl>
    )
}

export default Sort
