import React from 'react'

import DraftCard from './DraftCard'

const DraftList = ({ studysets }) => {
    return (
        <React.Fragment>
            {studysets.studySet.map((studyset) => (
                <DraftCard key={studyset.id} studyset={studyset} path={studysets.path} />
            ))}
        </React.Fragment>
    )
}

export default DraftList
