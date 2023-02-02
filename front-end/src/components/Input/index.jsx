import { InputBase } from '@mui/material'

import { AppStyles } from '~/constants/styles'

const Input = ({ placeholder, isFullwidth, style, isRequired, isDisable, onChange, value = '' }) => {
    return (
        <InputBase
            placeholder={placeholder}
            type="email"
            fullWidth={isFullwidth}
            required={isRequired}
            disabled={isDisable}
            value={value}
            onChange={onChange}
            sx={{
                borderRadius: 2.5,
                elevation: 1,
                py: 1.4,
                px: 2.4,
                backgroundColor: AppStyles.colors['#FAFBFF'],
                boxShadow:
                    '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                mt: 2,
                ...style,
            }}
        />
    )
}

export default Input
