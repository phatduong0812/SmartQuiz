import { get } from '~/utils/ApiCaller'

const useStudySet = () => {
    const getStudySetList = (signal) => get({ endpoint: '/api/StudySets', signal })
    const getStudySet = (id, signal) =>
        get({
            endpoint: `/api/StudySets/${id}`,
            signal: signal,
        })
    return { getStudySetList, getStudySet }
}

export default useStudySet
