﻿using SmartQuizApi.Data.DTOs.StudySetDTOs;
using SmartQuizApi.Data.DTOs.UserDTO;

namespace SmartQuizApi.Data.DTOs.ClassDTOs
{
    public class GetClassDetailDTO
    {
        public string Id { get; set; }
        public string Creator { get; set; }
        public string Name { get; set; }
        public int UserId { get; set; }
        public int TotalStudySet { get; set; }
        public int TotalMember { get; set; }
        public string Description { get; set; }
        public string JoinCode { get; set; }
        public string? ImageUrl { get; set; }
        public bool IsAlreadyJoin { get; set; }
    }
}
