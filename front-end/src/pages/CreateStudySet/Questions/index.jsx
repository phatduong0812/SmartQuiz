import React from 'react'

import Question from './Question'

const Questions = ({ questions, deleteQuestionDraft }) => {
    return (
        <React.Fragment>
            {questions.map((question, index) => (
                <Question key={question.id} index={index} {...question} deleteQuestionDraft={deleteQuestionDraft} />
            ))}
        </React.Fragment>
    )
}

export default Questions
