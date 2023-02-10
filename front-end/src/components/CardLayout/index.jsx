import { Card } from '@mui/material'

import { AppStyles } from '~/constants/styles'

const CardLayout = ({ children, style, onClick }) => {
    return (
        <Card
            sx={{
                height: '1',
                backgroundColor: AppStyles.colors['#FAFBFF'],
                ...style,
            }}
            onClick={onClick}
        >
            {children}
        </Card>
    )
}

export default CardLayout
