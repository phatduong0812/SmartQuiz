import { Typography } from '@mui/material'

import { AppStyles } from '~/constants/styles'

const LabelRequired = () => {
    return (
        <Typography component="span" variant="body1" sx={{ color: AppStyles.colors['#FFAF00'] }}>
            (*)
        </Typography>
    )
}

export default LabelRequired
