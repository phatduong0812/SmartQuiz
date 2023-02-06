import React from 'react'

import DraftCard from './DraftCard'

const DraftList = ({ studysets }) => {
    return (
        <React.Fragment>
            {studysets.map((studyset, index) => (
                <DraftCard key={studyset.id} index={index} studyset={studyset} />
            ))}
        </React.Fragment>
    )
}

export default DraftList
