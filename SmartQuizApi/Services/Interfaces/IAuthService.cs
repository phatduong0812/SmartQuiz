using Microsoft.AspNetCore.Authentication;
using SmartQuizApi.Data.Models;
using System.IdentityModel.Tokens.Jwt;

namespace SmartQuizApi.Services.Interfaces
{
    public interface IAuthService
    {
        User? GetUser(AuthenticateResult result);
        public Task<string> GenerateToken(User user);
        public JwtSecurityToken DecodeToken(string token);
    }
}
