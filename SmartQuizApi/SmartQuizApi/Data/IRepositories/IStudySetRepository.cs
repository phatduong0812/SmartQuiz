using SmartQuizApi.Data.Models;

namespace SmartQuizApi.Data.IRepositories
{
    public interface IStudySetRepository
    {
        void CreateStudySet(StudySet studySet);
        Task<List<StudySet>> GetListStudySetsAsync();   
        StudySet? GetStudySetById(int id);
    }
}
