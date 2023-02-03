import { CardContent, Divider } from '@mui/material'
import CardLayout from '~/components/CardLayout'

import QuestionAction from './QuestionContent/QuestionAction'

const CardLayoutStyle = {
    px: 1,
    mt: 5,
}

const Question = () => {
    return (
        <CardLayout style={CardLayoutStyle}>
            <CardContent>
                <QuestionAction index={0} />
                <Divider />
            </CardContent>
        </CardLayout>
    )
}

export default Question
