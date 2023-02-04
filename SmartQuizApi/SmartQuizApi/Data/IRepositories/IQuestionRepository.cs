using SmartQuizApi.Data.Models;

namespace SmartQuizApi.Data.IRepositories
{
    public interface IQuestionRepository
    {
        Task<List<Question>> GetQuestionsByStudySetId(string id);
    }
}
