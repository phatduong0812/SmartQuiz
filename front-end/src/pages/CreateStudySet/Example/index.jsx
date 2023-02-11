import React from 'react'

import Question from './Question'

import { exampleQuestion } from '~/Mock'

const QuestionsExample = () => {
    return (
        <React.Fragment>
            {exampleQuestion.map((question, index) => (
                <Question key={question.id} index={index} {...question} />
            ))}
        </React.Fragment>
    )
}

export default QuestionsExample
