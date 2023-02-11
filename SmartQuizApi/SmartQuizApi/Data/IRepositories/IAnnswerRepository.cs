using SmartQuizApi.Data.Models;

namespace SmartQuizApi.Data.IRepositories
{
    public interface IAnnswerRepository
    {
        void CreateAnswer(Answer answer);

        Task<List<Answer>> GetAnswersByQuestionIdAsync(string id);

        void BulkDeleteAnswers(List<Answer> answerList);
    }
}
