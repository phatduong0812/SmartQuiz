﻿using Microsoft.AspNetCore.Authentication;
using Microsoft.IdentityModel.Tokens;
using SmartQuizApi.Data.Models;
using SmartQuizApi.Services.Interfaces;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace SmartQuizApi.Services
{
    public class AuthService : IAuthService
    {
        public AuthService()
        {
        }

        public JwtSecurityToken DecodeToken(string token)
        {
            var parsedToken = token.Replace("Bearer ", string.Empty);
            var handler = new JwtSecurityTokenHandler();    
            return handler.ReadJwtToken(parsedToken);
        }

        public async Task<string> GenerateToken(User user, bool premimum)
        {
            var signinCredentials = GetSigninCredentials();
            var claims = await GetClaims(user, premimum);
            var tokenOptions = GenerateTokenOptions(signinCredentials, claims);
            return new JwtSecurityTokenHandler().WriteToken(tokenOptions);
        }

        public User? GetUser(AuthenticateResult result)
        {
            var email = result.Principal.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Email);
            if (email != null)
            {
                var userName = result.Principal.Claims.FirstOrDefault(x => x.Type == ClaimTypes.Name);
                var imageUrl = result.Principal.Claims.FirstOrDefault(x => x.Type == "picture");
                return new User
                {
                    Name = userName.Value,
                    Email = email.Value,
                    ImageUrl = imageUrl.Value,
                };
            }
            return null;
        }

        private JwtSecurityToken GenerateTokenOptions(SigningCredentials signingCredentials, List<Claim> claims)
        {
            var tokenOptions = new JwtSecurityToken
            (
                "Smartquiz",
                "http://localhost:5148",
                claims,
                expires: DateTime.Now.AddMinutes(Convert.ToDouble(129600)),
                signingCredentials: signingCredentials
            );

            return tokenOptions;
        }

        private Task<List<Claim>> GetClaims(User user, bool primium)
        {
            var claims = new List<Claim>
            {
                new("email", user.Email),
                new("name", user.Name),
                new("role", user.Role),
                new("image", user.ImageUrl),
                new("userId", user.Id.ToString()),
                new("premium", primium.ToString())
            };

            return Task.FromResult(claims);
        }

        private SigningCredentials GetSigninCredentials()
        {
            //var secretKey = Environment.GetEnvironmentVariable("SecretKey");
            //var key = Encoding.UTF8.GetBytes(secretKey);
            var key = Encoding.UTF8.GetBytes("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");
            var secret = new SymmetricSecurityKey(key);

            return new SigningCredentials(secret, SecurityAlgorithms.HmacSha256);
        }
    }
}
