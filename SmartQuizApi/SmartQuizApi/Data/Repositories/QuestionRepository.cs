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

        public void CreateQuestion(Question question)
        {
            Create(question);
        }

        public async Task<List<Question>> GetQuestionsByStudySetId(string id)
        {
            return await GetByCondition(x => x.StudySetId.Equals(id)).Include(x => x.Answers).ToListAsync();
        }
    }
}
