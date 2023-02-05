const { get } = require('~/utils/ApiCaller')

const useSchoolAction = (signal) => {
    const getSchools = () => get({ endpoint: '/api/schools', signal })
    return { getSchools }
}

export default useSchoolAction
