using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SmartQuizApi.Data.IRepositories;
using SmartQuizApi.Services.Utils;

namespace SmartQuizApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IRepositoryManager _repositoryManager;
        private readonly IMapper _mapper;

        public UsersController(IRepositoryManager repositoryManager, IMapper mapper)
        {
            _repositoryManager = repositoryManager;
            _mapper = mapper;
        }

        [HttpPost("mark-study-set")]
        public async Task<IActionResult> MarkStudySet(int userId, string studySetId)
        {
            try
            {
                if (_repositoryManager.StudySet.GetStudySetById(studySetId) == null)
                    return StatusCode(StatusCodes.Status400BadRequest, new Response(400, "Study set id do not exist"));
                if (_repositoryManager.User.GetUserById(userId) == null)
                    return StatusCode(StatusCodes.Status400BadRequest, new Response(400, "User id do not exist"));
                if (_repositoryManager.BookMark.GetBookMark(userId, studySetId) == null)
                {
                    _repositoryManager.BookMark.CreateBookMark(userId, studySetId);
                    await _repositoryManager.SaveChangesAsync();
                }
                return StatusCode(StatusCodes.Status201Created, new Response(201, "", "Create successfully"));
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response(500, ex.Message));
            }
        }

        [HttpPost("un-mark-study-set")]
        public async Task<IActionResult> UnMarkStudySet(int userId, string studySetId)
        {
            try
            {
                if (_repositoryManager.StudySet.GetStudySetById(studySetId) == null)
                    return StatusCode(StatusCodes.Status400BadRequest, new Response(400, "Study set id do not exist"));
                if (_repositoryManager.User.GetUserById(userId) == null)
                    return StatusCode(StatusCodes.Status400BadRequest, new Response(400, "User id do not exist"));
                if (_repositoryManager.BookMark.GetBookMark(userId, studySetId) != null)
                {
                    _repositoryManager.BookMark.DeleteBookMark(userId, studySetId);
                    await _repositoryManager.SaveChangesAsync();
                }
                return StatusCode(StatusCodes.Status200OK, new Response(200, "", "Delete successfully"));
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, new Response(500, ex.Message));
            }
        }
    }
}
