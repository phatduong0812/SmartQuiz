using SmartQuizApi.Data.IRepositories;
using SmartQuizApi.Data.Models;

namespace SmartQuizApi.Data.Repositories
{
    public class AnswerRepository : RepositoryBase<Answer>, IAnnswerRepository
    {
        public AnswerRepository(SmartquizContext context) : base(context)
        {
        }

        public void CreateAnswer(Answer answer)
        {
            Create(answer);
        }
    }
}
