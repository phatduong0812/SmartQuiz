using SmartQuizApi.Data.IRepositories;
using SmartQuizApi.Data.Models;

namespace SmartQuizApi.Data.Repositories
{
    public class RepositoryManager : IRepositoryManager
    {
        private SmartquizContext _context;
        private IUserRepository _userRepository;
        public RepositoryManager(SmartquizContext context)
        {
            _context= context;
        }

        public IUserRepository User
        {
            get
            {
                if (_userRepository == null )
                {
                    _userRepository = new UserRepository(_context);
                }
                return _userRepository;
            }
        }

        public async Task SaveChangesAsync()
        {
            await _context.SaveChangesAsync();
        }
    }
}
