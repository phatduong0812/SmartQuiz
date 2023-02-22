    using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using SmartQuizApi.Config;
using SmartQuizApi.Data.IRepositories;
using SmartQuizApi.Data.Models;
using SmartQuizApi.Data.Repositories;
using SmartQuizApi.Services;
using SmartQuizApi.Services.Interfaces;
using System.Security.Claims;
using System.Text;
using SameSiteMode = Microsoft.AspNetCore.Http.SameSiteMode;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<DbA95102SmartquizContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("AppConnection"));
});
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultSignInScheme = JwtBearerDefaults.AuthenticationScheme;
})
    .AddJwtBearer(options =>
    {
        options.SaveToken = true;
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("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")),
            ValidateLifetime = true,
            ClockSkew = TimeSpan.Zero,
            //ValidIssuer = Environment.GetEnvironmentVariable("ValidIssuer"),
            //ValidAudience = Environment.GetEnvironmentVariable("ValidAudience")
            ValidIssuer = "Smartquiz",
            ValidAudience = "http://localhost:5148"

        };
    })
    .AddGoogle(options =>
    {
        //options.ClientId = Environment.GetEnvironmentVariable("ClientId");
        //options.ClientSecret = Environment.GetEnvironmentVariable("ClientSecret");
        options.ClientId = "877217021377-qnrb7lma4t1u5od0svhb5q3jc9aepqel.apps.googleusercontent.com";
        options.ClientSecret = "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";
        options.SignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
        options.ReturnUrlParameter = "~/";
        options.SaveTokens = true;
        options.Scope.Add("profile");
        options.Events.OnCreatingTicket = context =>
        {
            var picture = context.User.GetProperty("picture").GetString();
            context.Identity.AddClaim(new Claim("picture", picture));

            return Task.CompletedTask;
        };
    })
    .AddCookie();

builder.Services.Configure<CookiePolicyOptions>(options =>
{
    options.CheckConsentNeeded = context => true;
    options.MinimumSameSitePolicy = SameSiteMode.Strict;
});
builder.Services.AddScoped<IRepositoryManager, RepositoryManager>();
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddAutoMapper(typeof(MappingProfile));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{    
}

app.UseSwagger();
app.UseSwaggerUI();

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseAuthentication();
app.UseCookiePolicy(new CookiePolicyOptions
{
    Secure = CookieSecurePolicy.Always
});

app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());
app.MapControllers();

app.Run();
