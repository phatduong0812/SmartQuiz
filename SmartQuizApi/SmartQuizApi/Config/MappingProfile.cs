    using AutoMapper;
using SmartQuizApi.Data.DTOs.AnswerDTOs;
using SmartQuizApi.Data.DTOs.GradeDTOs;
using SmartQuizApi.Data.DTOs.QuestionDTOs;
using SmartQuizApi.Data.DTOs.SchoolDTOs;
using SmartQuizApi.Data.DTOs.StudySetDTOs;
using SmartQuizApi.Data.DTOs.SubjectDTOs;
using SmartQuizApi.Data.Models;

namespace SmartQuizApi.Config
{
    public class MappingProfile : Profile
    {
        public MappingProfile() 
        {
            CreateMap<CreateStudySetDTO, StudySet>();
            CreateMap<School, GetAllSchoolsDTO>();
            CreateMap<Grade, GetAllGradesDTO>();
            CreateMap<Subject, GetAllSubjectsDTO>();
            CreateMap<StudySet, GetStudySetDetailsDTO>().ForMember(dest => dest.Creator, opt => opt.MapFrom(src => src.User.Name))
                                                        .ForMember(des => des.GradeName, opt => opt.MapFrom(src => src.Grade.Name))
                                                        .ForMember(des => des.SubjectName, opt => opt.MapFrom(src => src.Subject.Name))
                                                        .ForMember(des => des.SchoolName, opt => opt.MapFrom(src => src.School.Name));
            CreateMap<Question, GetQuestionDTO>();
            CreateMap<Answer, GetAnswerDTO>();
            CreateMap<StudySet, GetStudySetsListDTO>().ForMember(des => des.Creator, opt => opt.MapFrom(src => src.User.Name))
                                                      .ForMember(des => des.GradeName, opt => opt.MapFrom(src => src.Grade.Name))
                                                      .ForMember(des => des.SubjectName, opt => opt.MapFrom(src => src.Subject.Name))
                                                      .ForMember(des => des.SchoolName, opt => opt.MapFrom(src => src.School.Name));
            CreateMap<CreateQuestionDTO, Question>();
            CreateMap<CreateAnwserDTO, Answer>();
        }
    }
}
