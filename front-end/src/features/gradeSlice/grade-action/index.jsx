const { get } = require('~/utils/ApiCaller')

const useGrade = (signal) => {
    const getGrades = () => get({ endpoint: '/api/grades', signal })
    return { getGrades }
}

export default useGrade
