using System;
using System.Collections.Generic;

namespace SmartQuizApi.Data.Models;

public partial class Question
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string StudySetId { get; set; } = null!;

    public virtual ICollection<Answer> Answers { get; } = new List<Answer>();

    public virtual StudySet StudySet { get; set; } = null!;
}
