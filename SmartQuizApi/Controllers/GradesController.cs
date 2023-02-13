using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SmartQuizApi.Data.DTOs.GradeDTOs;
using SmartQuizApi.Data.IRepositories;
using SmartQuizApi.Services.Utils;

namespace SmartQuizApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GradesController : ControllerBase
    {
        private readonly IRepositoryManager _repositoryManager;
        private readonly IMapper _mapper;

        public GradesController(IMapper mapper, IRepositoryManager repositoryManager)
        {
            _repositoryManager = repositoryManager;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllGrades()
        {
            try
            {
                var gradesList = await _repositoryManager.Grade.GetAllGradesAsync();
                var gradesListDTO = _mapper.Map<List<GetAllGradesDTO>>(gradesList);
                return StatusCode(StatusCodes.Status200OK, new Response(200, gradesListDTO));
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response(500, ex.Message));
            }
        }
    }
}
