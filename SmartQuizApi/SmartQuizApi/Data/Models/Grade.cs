using System;
using System.Collections.Generic;

namespace SmartQuizApi.Data.Models;

public partial class Grade
{
    public int Id { get; set; }

    public string Grade1 { get; set; } = null!;

    public virtual ICollection<StudySet> StudySets { get; } = new List<StudySet>();
}
