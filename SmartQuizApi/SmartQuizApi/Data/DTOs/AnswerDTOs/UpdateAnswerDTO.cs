﻿namespace SmartQuizApi.Data.DTOs.AnswerDTOs
{
    public class UpdateAnswerDTO
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public bool IsCorrectAnswer { get; set; }
    }
}
