import { CardContent } from '@mui/material'
import CardLayout from '~/components/CardLayout'

const CardLayoutStyle = {
    px: 5,
}

const Question = () => {
    return (
        <CardLayout style={CardLayoutStyle}>
            <CardContent></CardContent>
        </CardLayout>
    )
}

export default Question
