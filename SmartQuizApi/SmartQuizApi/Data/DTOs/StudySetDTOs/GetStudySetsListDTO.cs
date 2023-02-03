namespace SmartQuizApi.Data.DTOs.StudySetDTOs
{
    public class GetStudySetsListDTO
    {
        public int Id { get; set; }

        public string Name { get; set; } = null!;

        public int UserId { get; set; }

        public string Creator { get; set; }

        public int SchoolId { get; set; }

        public string SchoolName { get; set; }

        public int GradeId { get; set; }

        public string GradeName { get; set; }

        public int SubjectId { get; set; }

        public string SubjectName { get; set; }

        public int? ClassId { get; set; }

        public bool IsPublic { get; set; }

        public DateTime CreateAt { get; set; }

        public DateTime UpdateAt { get; set; }
    }
}
