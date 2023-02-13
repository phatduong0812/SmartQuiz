using System;
using System.Collections.Generic;

namespace SmartQuizApi.Data.Models;

public partial class Bill
{
    public int Id { get; set; }

    public int MethodId { get; set; }

    public DateTime EffectiveDate { get; set; }

    public DateTime ExpirationDate { get; set; }

    public bool Status { get; set; }

    public DateTime PaymentDate { get; set; }

    public int UserId { get; set; }

    public int NumberOfMonths { get; set; }

    public string TotalAmount { get; set; } = null!;

    public virtual Method Method { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
