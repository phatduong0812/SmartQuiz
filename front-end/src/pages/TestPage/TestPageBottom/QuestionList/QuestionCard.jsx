import { CardContent, Typography } from '@mui/material'
import CardLayout from '~/components/CardLayout'

import Answer from './Answer'

import { choices } from '~/Mock'
import { AppStyles } from '~/constants/styles'

const QuestionCard = ({ question, index }) => {
    const CardLayoutStyle = {
        mb: 2,
        borderRadius: 3,
        p: 1,
        backgroundColor: index < 1 && AppStyles.colors['#CCDBFF'],
        height: 'none',
    }
    return (
        <CardLayout style={CardLayoutStyle}>
            <CardContent>
                <Typography sx={{ mb: 5, fontSize: 20, fontWeight: 500 }}>
                    {index + 1}. {question.name}
                </Typography>
                <Typography sx={{ mb: 2, fontWeight: 500 }}>Câu trả lời</Typography>
                {question.answers.map((question, index) => (
                    <Answer key={question.id} choice={choices[index]} answer={question.name} />
                ))}
            </CardContent>
        </CardLayout>
    )
}

export default QuestionCard
