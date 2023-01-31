using System;
using System.Collections.Generic;

namespace SmartQuizApi.Data.Models;

public partial class TestResult
{
    public int Id { get; set; }

    public int UserId { get; set; }

    public int StudySetId { get; set; }

    public double Mark { get; set; }

    public DateTime StartTime { get; set; }

    public DateTime EndTime { get; set; }

    public virtual StudySet StudySet { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
