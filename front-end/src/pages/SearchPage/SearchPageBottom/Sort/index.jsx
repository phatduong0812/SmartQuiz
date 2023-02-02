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
        <FormControl sx={{ minWidth: 149 }}>
            <Select
                value={type}
                variant="outlined"
                onChange={handleChange}
                sx={{ pl: 1, bgcolor: AppStyles.colors['#E6EDFF'], borderRadius: 3 }}
            >
                <MenuItem value={'Newest'}>Gần nhất</MenuItem>
                <MenuItem value={'Oldest'}>Xem nhiều nhất</MenuItem>
            </Select>
        </FormControl>
    )
}

export default Sort
