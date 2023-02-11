import { Grid } from '@mui/material'
import QuestionCardLeft from '~/components/QuestionCard/QuestionCardLeft'
import QuestionCardRight from '~/components/QuestionCard/QuestionCardRight'

const QuestionDescription = ({ quest, ans }) => {
    return (
        <Grid container columnSpacing={8} mt={2}>
            <Grid item xs={6}>
                <QuestionCardLeft>{quest}</QuestionCardLeft>
            </Grid>
            <Grid item xs={6}>
                <QuestionCardRight questions={ans} />
            </Grid>
        </Grid>
    )
}

export default QuestionDescription
