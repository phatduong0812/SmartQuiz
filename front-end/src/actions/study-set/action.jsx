import { get } from '~/utils/ApiCaller'

const useStudySet = () => {
    const getStudySetList = () => get({ endpoint: '/api/StudySets' })
    const getStudySet = (id) =>
        get({
            endpoint: `/api/StudySets/${id}`,
        })
    return { getStudySetList, getStudySet }
}

export default useStudySet
