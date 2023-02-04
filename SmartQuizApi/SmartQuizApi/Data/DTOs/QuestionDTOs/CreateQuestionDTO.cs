using SmartQuizApi.Data.DTOs.AnswerDTOs;

namespace SmartQuizApi.Data.DTOs.QuestionDTOs
{
    public class CreateQuestionDTO
    {
        public string QuestionName { get; set; }

        public List<CreateAnwserDTO> Answers { get; set; }
    }
}
