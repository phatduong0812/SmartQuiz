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
            return GetByCondition(x => true).Include(x => x.User)
                                            .Include(x => x.Grade)
                                            .Include(x => x.Subject)
                                            .Include(x => x.Class)
                                            .Include(x => x.School).ToListAsync();
        }

        public StudySet? GetStudySetById(string id)
        {
            return GetByCondition(x => x.Equals(id)).Include(x => x.User)
                                                .Include(x => x.Grade)
                                                .Include(x => x.Subject)
                                                .Include(x => x.Class)
                                                .Include(x => x.School).FirstOrDefault();
        }
    }
}
