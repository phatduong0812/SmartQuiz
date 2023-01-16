using System;
using System.Collections.Generic;

namespace SmartQuizApi.Data.Models;

public partial class Answer
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public bool IsCorrectAnswer { get; set; }

    public int QuestionId { get; set; }

    public virtual Question Question { get; set; } = null!;
}
