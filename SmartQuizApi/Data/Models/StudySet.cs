﻿using System;
using System.Collections.Generic;

namespace SmartQuizApi.Data.Models;

public partial class StudySet
{
    public string Id { get; set; } = null!;

    public string Name { get; set; } = null!;

    public int UserId { get; set; }

    public bool IsPublic { get; set; }

    public DateTime CreateAt { get; set; }

    public DateTime UpdateAt { get; set; }

    public int SubjectsOfGradeId { get; set; }

    public virtual ICollection<Bookmark> Bookmarks { get; } = new List<Bookmark>();

    public virtual ICollection<History> Histories { get; } = new List<History>();

    public virtual ICollection<Question> Questions { get; } = new List<Question>();

    public virtual ICollection<StudySetClass> StudySetClasses { get; } = new List<StudySetClass>();

    public virtual ICollection<StudySetRating> StudySetRatings { get; } = new List<StudySetRating>();

    public virtual SubjectsOfGrade SubjectsOfGrade { get; set; } = null!;

    public virtual ICollection<TestResult> TestResults { get; } = new List<TestResult>();

    public virtual User User { get; set; } = null!;
}
