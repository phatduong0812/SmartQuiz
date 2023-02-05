import React from 'react'

import QuestionCard from './QuestionCard'

const QuestionList = ({ questions }) => {
    return (
        <React.Fragment>
            {questions.map((question, index) => (
                <QuestionCard key={question.id} index={index} question={question} />
            ))}
        </React.Fragment>
    )
}

export default QuestionList
