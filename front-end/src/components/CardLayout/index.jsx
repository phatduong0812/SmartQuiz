import { Card } from '@mui/material'

import { AppStyles } from '~/constants/styles'

const CardLayout = ({ children, style }) => {
    return (
        <Card
            sx={{
                height: '1',
                backgroundColor: AppStyles.colors['#FAFBFF'],
                ...style,
            }}
        >
            {children}
        </Card>
    )
}

export default CardLayout
