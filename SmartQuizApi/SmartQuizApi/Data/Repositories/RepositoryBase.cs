using SmartQuizApi.Data.IRepositories;
using SmartQuizApi.Data.Models;

namespace SmartQuizApi.Data.Repositories
{
    public class RepositoryBase<T> : IRepositoryBase<T> where T : class
    {
        protected SmartquizContext _context { get; set; }

        public RepositoryBase(SmartquizContext context)
        {
            _context = context;
        }

        public void BulkDelete(IEnumerable<T> entities)
        {
            _context.Set<T>().RemoveRange(entities);
        }

        public void Create(T entity)
        {
            _context.Set<T>().Add(entity);
        }

        public void Delete(T entity)
        {
            _context.Set<T>().Remove(entity);
        }

        public IQueryable<T> GetByCondition(System.Linq.Expressions.Expression<Func<T, bool>> expression)
        {
            return _context.Set<T>().Where(expression);
        }

        public void Update(T entity)
        {
            _context.Set<T>().Update(entity);
        }
    }
}
