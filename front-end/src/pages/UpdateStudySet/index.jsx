import { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { useStudySet } from '~/actions/study-set'

const UpdateStudySet = () => {
    const { id } = useParams()
    const { getStudySet } = useStudySet()

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal
        getStudySet(id, signal).then(() => {})

        return () => {
            controller.abort()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return <div>UpdateStudySet</div>
}

export default UpdateStudySet
