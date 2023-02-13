﻿using SmartQuizApi.Data.IRepositories;
using SmartQuizApi.Data.Models;

namespace SmartQuizApi.Data.Repositories
{
    public class BookMarkRepository : RepositoryBase<Bookmark>, IBookMarkRepository
    {
        public BookMarkRepository(SmartquizContext context) : base(context)
        {
        }
        public void CreateBookMark(int userId, string studySetId)
        {
            Bookmark bookMark = new Bookmark { StudySetId = studySetId, UserId = userId , CreateDate = DateTime.Now};
            Create(bookMark);
        }

        public void DeleteBookMark(int userId, string studySetId)
        {
            Bookmark bookMark = new Bookmark { StudySetId = studySetId, UserId = userId };
            Delete(bookMark);
        }

        public Bookmark? GetBookMark(int userId, string studySetId)
        {
            return GetByCondition(x => x.StudySetId.Equals(studySetId) && x.UserId == userId).FirstOrDefault();
        }
    }
}
