namespace SmartQuizApi.Data.IRepositories
{
    public interface IRepositoryManager
    {
        IUserRepository User { get; }
        IStudySetRepository StudySet { get; }
        ISchoolRepository School { get; }
        IGradeRepository Grade { get; }
        ISubjectRepository Subject { get; }
        IQuestionRepository Question { get; }
        IAnnswerRepository Annswer { get; }
        Task SaveChangesAsync();
    }
}
