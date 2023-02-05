import React, { memo } from 'react'

import Question from './Question'

const Questions = ({ questions, deleteQuestionDraft }) => {
    return (
        <React.Fragment>
            {questions.map((question, index) => (
                <Question key={index} index={index} {...question} deleteQuestionDraft={deleteQuestionDraft} />
            ))}
        </React.Fragment>
    )
}

export default memo(Questions)
