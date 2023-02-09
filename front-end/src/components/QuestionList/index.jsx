import React from 'react'

import QuestionCard from './QuestionCard'

const QuestionList = ({ questions }) => {
    let reviewQuest = questions.length > 3 ? questions.splice(0, 3) : questions
    return (
        <React.Fragment>
            {reviewQuest?.map((question, index) => (
                <QuestionCard key={question.id} index={index} question={question} />
            ))}
        </React.Fragment>
    )
}

export default QuestionList
