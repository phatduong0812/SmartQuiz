﻿using SmartQuizApi.Data.Models;

namespace SmartQuizApi.Data.IRepositories
{
    public interface IClassMemberRepository
    {
        Task<List<ClassMember>> GetClassMembers(string classId);
        void CreateClassMember(ClassMember classMember);
        int GetTotalMember(string classId);
        ClassMember? GetClassMember(string classId, int userId);
        void DeleteClassMember(ClassMember classMember);
        Task<List<ClassMember>> GetClassMembersByUserId(int userId);
    }
}
