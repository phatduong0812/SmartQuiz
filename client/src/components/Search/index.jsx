import { useState } from 'react'

// import { useHistory } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import { InputBase } from '@mui/material'
import { styled } from '@mui/material/styles'

import { AppStyles } from '~/constants/styles'

const SearchCompo = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '12px',
    backgroundColor: AppStyles.colors['#E6EDFF'],
    '&:hover': {
        backgroundColor: AppStyles.colors['#E6EDFF'],
    },
    marginRight: 0,
    marginLeft: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 21),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: AppStyles.colors['rgba(51, 51, 51, 0.5)'],
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(0.5)})`,
        transition: theme.transitions.create('width'),
        width: '65%',
        [theme.breakpoints.up('md')]: {
            width: '65%',
        },
    },
}))

const Search = () => {
    const [value, setValue] = useState('')
    // const history = useHistory()

    const changeHandler = (event) => setValue(event.target.value)

    const searchHandler = (event) => {
        if (event.key === 'Enter') {
            if (value.trim().length !== 0) {
                // history.push(`/recipes?search=${value}`)
                setValue('')
            }
        }
    }

    return (
        <SearchCompo>
            <SearchIconWrapper>
                <SearchIcon sx={{ color: AppStyles.colors['#185CFF'] }} />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Tìm kiếm"
                inputProps={{ 'aria-label': 'search' }}
                value={value}
                onChange={changeHandler}
                onKeyDown={searchHandler}
            />
        </SearchCompo>
    )
}

export default Search
