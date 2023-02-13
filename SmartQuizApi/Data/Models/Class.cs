﻿using System;
using System.Collections.Generic;

namespace SmartQuizApi.Data.Models;

public partial class Class
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public int UserId { get; set; }

    public DateTime CreateAt { get; set; }

    public DateTime UpdateAt { get; set; }

    public virtual ICollection<ClassMember> ClassMembers { get; } = new List<ClassMember>();

    public virtual ICollection<StudySet> StudySets { get; } = new List<StudySet>();

    public virtual User User { get; set; } = null!;
}
