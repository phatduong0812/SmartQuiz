using Microsoft.EntityFrameworkCore;
using SmartQuizApi.Data.IRepositories;
using SmartQuizApi.Data.Models;

namespace SmartQuizApi.Data.Repositories
{
    public class QuestionRepository : RepositoryBase<Question>, IQuestionRepository
    {
        public QuestionRepository(SmartquizContext context) : base(context)
        {
        }

        public async Task<List<Question>> GetQuestionsByStudySetId(int id)
        {
            return await GetByCondition(x => x.StudySetId == id).Include(x => x.Answers).ToListAsync();
        }
    }
}
