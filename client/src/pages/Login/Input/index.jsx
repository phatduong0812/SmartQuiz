import { Box, InputBase } from '@mui/material'

import { AppStyles } from '~/constants/styles'

const Input = ({ placeholder }) => {
    return (
        <Box component="form">
            <InputBase
                placeholder={placeholder}
                type="email"
                fullWidth
                required
                sx={{
                    borderRadius: 2.25,
                    elevation: 1,
                    py: 1.8,
                    px: 2.4,
                    backgroundColor: AppStyles.colors['#FAFBFF'],
                    boxShadow:
                        '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                    mt: 2,
                }}
            />
        </Box>
    )
}

export default Input
