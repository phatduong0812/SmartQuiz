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

        public async Task<List<StudySet>> FilterStudySetAsync(string? name, int? gradeId, int? subjectId, int number)
        {
            return await GetByCondition(x => (name == null || x.Name.Contains(name))
                                        && (gradeId == null || x.GradeId == gradeId)
                                        && (subjectId == null || x.SubjectId == subjectId)).Take(number).Include(x => x.User)
                                                                                                        .Include(x => x.Grade)
                                                                                                        .Include(x => x.Subject)
                                                                                                        .Include(x => x.Class).ToListAsync();
        }

        public async Task<List<StudySet>> GetListStudySetsAsync()
        {
            return await GetByCondition(x => true).Include(x => x.User)
                                                .Include(x => x.Grade)
                                                .Include(x => x.Subject)
                                                .Include(x => x.Class).ToListAsync();
        }

        public StudySet? GetStudySetById(string id)
        {
            return GetByCondition(x => x.Id.Equals(id)).Include(x => x.User)
                                                    .Include(x => x.Grade)
                                                    .Include(x => x.Subject)
                                                    .Include(x => x.Class).FirstOrDefault();
        }

        public void UpdateStudySet(StudySet studySet)
        {
            Update(studySet);
        }
    }
}
