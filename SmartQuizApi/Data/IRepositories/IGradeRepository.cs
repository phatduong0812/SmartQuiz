using SmartQuizApi.Data.Models;

namespace SmartQuizApi.Data.IRepositories
{
    public interface IGradeRepository
    {
        void CreateGrade(Grade grade);
        void UpdateGrade(Grade grade);
        void DeleteGrade(Grade grade);
        Task<List<Grade>> GetAllGradesAsync();
        Grade? GetGradeById(int id);
    }
}
