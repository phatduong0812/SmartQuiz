using System;
using System.Collections.Generic;

namespace SmartQuizApi.Data.Models;

public partial class ClassMember
{
    public int ClassId { get; set; }

    public int MemberId { get; set; }

    public DateTime CreateAt { get; set; }

    public DateTime UpdateAt { get; set; }

    public virtual Class Class { get; set; } = null!;

    public virtual User Member { get; set; } = null!;
}
