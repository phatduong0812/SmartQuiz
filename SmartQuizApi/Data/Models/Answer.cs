using System;
using System.Collections.Generic;

namespace SmartQuizApi.Data.Models;

public partial class Answer
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public bool IsCorrectAnswer { get; set; }

    public string QuestionId { get; set; } = null!;

    public virtual Question Question { get; set; } = null!;
}
