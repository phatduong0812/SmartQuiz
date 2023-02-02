using SmartQuizApi.Data.Models;

namespace SmartQuizApi.Data.IRepositories
{
    public interface ISchoolRepository
    {
        School? GetSchoolById(int id);
        void CreateSchool(School school);
        Task<List<School>> GetAllSchoolsAsync();
        void DeleteSchool(School school);
        void UpdateSchool(School school);
    }
}
