namespace SmartQuizApi.Data.IRepositories
{
    public interface IRepositoryManager
    {
        IUserRepository User { get; }
        Task SaveChangesAsync();
    }
}
