const { get } = require('~/utils/ApiCaller')

const useSubject = (signal) => {
    const getSubjects = () => get({ endpoint: '/api/subjects', signal })
    return { getSubjects }
}

export default useSubject
