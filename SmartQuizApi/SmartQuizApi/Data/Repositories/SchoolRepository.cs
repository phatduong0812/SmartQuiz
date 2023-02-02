using Microsoft.EntityFrameworkCore;
using SmartQuizApi.Data.IRepositories;
using SmartQuizApi.Data.Models;

namespace SmartQuizApi.Data.Repositories
{
    public class SchoolRepository : RepositoryBase<School>, ISchoolRepository
    {
        public SchoolRepository(SmartquizContext context) : base(context)
        {
        }

        public void CreateSchool(School school)
        {
            Create(school);
        }

        public void DeleteSchool(School school)
        {
            Delete(school);
        }

        public School? GetSchoolById(int id)
        {
            return GetByCondition(x => x.Id == id).FirstOrDefault();
        }

        public async Task<List<School>> GetAllSchoolsAsync()
        {
            return await GetAll().ToListAsync();
        }

        public void UpdateSchool(School school)
        {
            Update(school);
        }
    }
}
