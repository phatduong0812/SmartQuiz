import { Box, Typography } from '@mui/material'
import LabelRequired from '~/components/RequiredLabel'
import SelectCompo from '~/components/SelectCompo'

import { AppStyles } from '~/constants/styles'

const selectStyle = {
    border: 'none',
    backgroundColor: AppStyles.colors['#FAFBFF'],
}

const FormControlStyle = {
    mt: 1.5,
    minWidth: 260,
}

const SelectField = ({ label, isRequired, ml = 3, onChange, value, data, isDisable }) => {
    return (
        <Box maxWidth={260} ml={ml}>
            <Typography component="label" variant="body1" sx={{ color: AppStyles.colors['#FAFBFF'] }}>
                {label}
            </Typography>
            {isRequired && <LabelRequired />}
            <SelectCompo
                selectStyle={selectStyle}
                formControlStyle={FormControlStyle}
                onChange={onChange}
                value={value}
                isRequire={isRequired}
                data={data}
                isDisable={isDisable}
            />
        </Box>
    )
}

export default SelectField
