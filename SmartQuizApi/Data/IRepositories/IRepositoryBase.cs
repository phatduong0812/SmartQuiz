using System.Linq.Expressions;

namespace SmartQuizApi.Data.IRepositories
{
    public interface IRepositoryBase<T>
    {
        IQueryable<T> GetByCondition(Expression<Func<T, bool>> expression);
        void Create(T entity);
        void Update(T entity);
        void Delete(T entity);
        void BulkDelete(IEnumerable<T> entities);
        IQueryable<T> GetAll();
    }
}
