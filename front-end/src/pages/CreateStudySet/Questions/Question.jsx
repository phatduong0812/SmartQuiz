import { CardContent, Divider } from '@mui/material'
import CardLayout from '~/components/CardLayout'

import QuestionAction from './QuestionContent/QuestionAction'
import QuestionDescription from './QuestionContent/QuestionDescription'

const CardLayoutStyle = {
    px: 1,
    mt: 5,
}

const Question = ({ index, quest, ans, deleteQuestionDraft, id }) => {
    return (
        <CardLayout style={CardLayoutStyle}>
            <CardContent>
                <QuestionAction index={index} deleteQuestionDraft={deleteQuestionDraft} id={id} />
                <Divider />
                <QuestionDescription quest={quest} ans={ans} />
            </CardContent>
        </CardLayout>
    )
}

export default Question
