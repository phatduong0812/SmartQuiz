using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using SmartQuizApi.Data.DTOs.StudySetDTOs;
using SmartQuizApi.Data.IRepositories;
using SmartQuizApi.Data.Models;
using SmartQuizApi.Services.Utils;

namespace SmartQuizApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudySetsController : ControllerBase
    {
        private readonly IRepositoryManager _repositoryManager;
        private readonly IMapper _mapper;

        public StudySetsController(IMapper mapper, IRepositoryManager repositoryManager)
        {
            _repositoryManager = repositoryManager;
            _mapper = mapper;
        }

        [HttpPost]
        public async Task<IActionResult> CreateStudySet(CreateStudySetDTO createStudySetDTO)
        {
            try
            {
                var school = _repositoryManager.School.GetSchoolById(createStudySetDTO.SchoolId);
                var subject = _repositoryManager.Subject.GetSubjectById(createStudySetDTO.SubjectId);
                var grade = _repositoryManager.Grade.GetGradeById(createStudySetDTO.GradeId);

                if (school == null || subject == null || grade == null)
                {
                    return StatusCode(StatusCodes.Status400BadRequest, new Response(400, "", "Some id do not exist"));
                }

                var studySet = _mapper.Map<StudySet>(createStudySetDTO);
                _repositoryManager.StudySet.CreateStudySet(studySet);
                await _repositoryManager.SaveChangesAsync();
                return StatusCode(StatusCodes.Status201Created, new Response(201,"", "Create successfully"));
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response(500, ex.Message));
            }
        }
    }
}
