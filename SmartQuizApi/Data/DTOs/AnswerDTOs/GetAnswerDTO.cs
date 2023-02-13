namespace SmartQuizApi.Data.DTOs.AnswerDTOs
{
    public class GetAnswerDTO
    {
        public int Id { get; set; }

        public string Name { get; set; } = null!;

        public bool IsCorrectAnswer { get; set; }
    }
}
