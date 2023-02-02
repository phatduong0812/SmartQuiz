import { Box, Typography } from '@mui/material'
import Input from '~/components/Input'
import LabelRequired from '~/components/RequiredLabel'

import { AppStyles } from '~/constants/styles'

const inputStyle = {
    maxWidth: 260,
    width: '100%',
    mt: 1.5,
}

const BoxField = ({ label, isRequired, ml = 3 }) => {
    return (
        <Box maxWidth={260} ml={ml}>
            <Typography component="label" variant="body1" sx={{ color: AppStyles.colors['#FAFBFF'] }}>
                {label}
            </Typography>{' '}
            {isRequired && <LabelRequired />}
            <Input isFullwidth={false} placeholder={'Trường: '} style={inputStyle} />
        </Box>
    )
}

export default BoxField
