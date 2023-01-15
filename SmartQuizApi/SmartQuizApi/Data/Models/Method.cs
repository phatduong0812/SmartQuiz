using System;
using System.Collections.Generic;

namespace SmartQuizApi.Data.Models;

public partial class Method
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string AmountPerMonth { get; set; } = null!;

    public virtual ICollection<Bill> Bills { get; } = new List<Bill>();
}
