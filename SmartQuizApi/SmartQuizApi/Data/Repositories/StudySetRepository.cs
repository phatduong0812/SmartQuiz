using Microsoft.EntityFrameworkCore;
using SmartQuizApi.Data.IRepositories;
using SmartQuizApi.Data.Models;

namespace SmartQuizApi.Data.Repositories
{
    public class StudySetRepository : RepositoryBase<StudySet>, IStudySetRepository
    {
        public StudySetRepository(SmartquizContext context) : base(context)
        {
        }

        public void CreateStudySet(StudySet studySet)
        {
            Create(studySet);
        }

        public Task<List<StudySet>> GetListStudySetsAsync()
        {
            throw new NotImplementedException();
        }

        public StudySet? GetStudySetById(int id)
        {
            return GetByCondition(x => x.Id == id).Include(x => x.User).FirstOrDefault();
        }
    }
}
