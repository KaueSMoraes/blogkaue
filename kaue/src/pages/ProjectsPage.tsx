import { Typography, Box, Card, CardContent, CardMedia, Button } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { FaGithub, FaBox } from 'react-icons/fa';
import { motion } from 'framer-motion';

function ProjectsPage() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const content = {
    pt: {
      title: "Projetos",
      description: "Aqui você encontrará uma seleção dos meus projetos mais relevantes.",
      projects: [
        {
          id: "toolsharp",
          name: "ToolSharp",
          description: "Biblioteca de extensões para Task em .NET",
          image: "/images/toolsharp-logo.png",
          shortDescription: "Extensões para tarefas assíncronas",
          githubUrl: "https://github.com/KaueSMoraes/ToolSharp",
          nugetUrl: "https://www.nuget.org/packages/ToolSharp/",
          buttonText: "Ver no GitHub",
          nugetButtonText: "Ver no NuGet"
        },
        {
          id: "probat",
          name: "Probat",
          description: "Motor de testes unitários para Protheus",
          image: "/images/totvslogo.png",
          shortDescription: "Engine de testes com Code Coverage",
          githubUrl: "https://github.com/KaueSMoraes/readme-probat",
          buttonText: "Ver no GitHub"
        },
        {
          id: "towercontrol",
          name: "TowerControl",
          description: "API Web para gerenciamento de servidores Linux",
          image: "/images/towercontrol-logo.png",
          shortDescription: "API REST para Protheus e Linux",
          githubUrl: "https://github.com/KaueSMoraes/TowerControlApi",
          buttonText: "Ver no GitHub"
        }
      ]
    },
    en: {
      title: "Projects",
      description: "Here you will find a selection of my most relevant projects.",
      projects: [
        {
          id: "toolsharp",
          name: "ToolSharp",
          description: "Task extension library for .NET",
          image: "/images/toolsharp-logo.png",
          shortDescription: "Async task extensions",
          githubUrl: "https://github.com/KaueSMoraes/ToolSharp",
          nugetUrl: "https://www.nuget.org/packages/ToolSharp/",
          buttonText: "View on GitHub",
          nugetButtonText: "View on NuGet"
        },
        {
          id: "probat",
          name: "Probat",
          description: "Unit testing engine for Protheus",
          image: "/images/totvslogo.png",
          shortDescription: "Testing engine with Code Coverage",
          githubUrl: "https://github.com/KaueSMoraes/readme-probat",
          buttonText: "View on GitHub"
        },
        {
          id: "towercontrol",
          name: "TowerControl",
          description: "Web API for Linux server management",
          image: "/images/towercontrol-logo.png",
          shortDescription: "REST API for Protheus and Linux",
          githubUrl: "https://github.com/KaueSMoraes/TowerControlApi",
          buttonText: "View on GitHub"
        }
      ]
    }
  };

  const currentContent = content[language];

  const handleProjectClick = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  const handleGitHubClick = (githubUrl: string, event: React.MouseEvent) => {
    event.stopPropagation();
    window.open(githubUrl, '_blank', 'noopener,noreferrer');
  };

  const handleNuGetClick = (nugetUrl: string, event: React.MouseEvent) => {
    event.stopPropagation();
    window.open(nugetUrl, '_blank', 'noopener,noreferrer');
  };

  const breadcrumbItems = [
    { label: language === 'pt' ? 'Início' : 'Home', path: '/' },
    { label: language === 'pt' ? 'Projetos' : 'Projects' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Box>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Breadcrumb items={breadcrumbItems} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            sx={{
              color: '#ffffff',
              fontWeight: '700',
              fontSize: '1.8rem',
              background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
              letterSpacing: '0.5px',
              mb: 1.5,
              mt: 3
            }}
          >
            {currentContent.title}
          </Typography>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Typography 
            variant="body1"
            sx={{
              color: '#e2e8f0',
              fontSize: '1rem',
              lineHeight: 1.6,
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
              letterSpacing: '0.3px',
              mb: 2
            }}
          >
            {currentContent.description}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Box 
            sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, 
              gap: 2,
              width: '100%'
            }}
          >
            {currentContent.projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.5 + (index * 0.1),
                  ease: "easeOut"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card 
                  elevation={0}
                  sx={{ 
                    width: '100%',
                    background: 'linear-gradient(145deg, rgba(30, 30, 60, 0.8) 0%, rgba(20, 20, 40, 0.9) 100%)',
                    borderRadius: 3,
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3), 0 0 15px rgba(59, 130, 246, 0.2)',
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      '&::before': {
                        opacity: 1
                      }
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }
                  }}
                >
            <Box 
              sx={{ 
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                cursor: 'pointer',
                '&:hover': {
                  '& .project-image': {
                    transform: 'scale(1.05)',
                    transition: 'transform 0.3s ease'
                  }
                }
              }}
              onClick={() => handleProjectClick(project.id)}
            >
              <CardMedia
                component="img"
                height="80"
                image={project.image}
                alt={project.name}
                className="project-image"
                sx={{
                  objectFit: 'contain',
                  p: 1,
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: 2,
                  m: 1,
                  transition: 'transform 0.3s ease',
                  filter: 'none',
                  WebkitFilter: 'none'
                }}
              />
              <CardContent sx={{ p: 1.5, width: '100%' }}>
                <Typography 
                  variant="h5" 
                  component="h2" 
                  gutterBottom
                  sx={{
                    color: '#ffffff',
                    fontWeight: '700',
                    fontSize: '1.1rem',
                    mb: 0.3,
                    background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                    letterSpacing: '0.5px',
                    textAlign: 'center'
                  }}
                >
                  {project.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{
                    color: '#a1a1aa',
                    fontSize: '0.75rem',
                    lineHeight: 1.3,
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                    letterSpacing: '0.2px',
                    textAlign: 'center',
                    mb: 0.3
                  }}
                >
                  {project.shortDescription}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{
                    color: '#71717a',
                    fontSize: '0.65rem',
                    lineHeight: 1.2,
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                    letterSpacing: '0.1px',
                    textAlign: 'center',
                    mb: 1
                  }}
                >
                  {project.description}
                </Typography>
                
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.3, flexWrap: 'wrap' }}>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<FaGithub />}
                    onClick={(e) => handleGitHubClick(project.githubUrl, e)}
                    sx={{
                      color: '#ffffff',
                      borderColor: '#3b82f6',
                      fontSize: '0.65rem',
                      fontWeight: '600',
                      textTransform: 'none',
                      px: 1.2,
                      py: 0.2,
                      borderRadius: '12px',
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 100%)',
                        borderColor: '#60a5fa',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
                      }
                    }}
                  >
                    {project.buttonText}
                  </Button>
                  
                  {project.nugetUrl && (
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<FaBox />}
                      onClick={(e) => handleNuGetClick(project.nugetUrl, e)}
                      sx={{
                        color: '#ffffff',
                        borderColor: '#004880',
                        fontSize: '0.65rem',
                        fontWeight: '600',
                        textTransform: 'none',
                        px: 1.2,
                        py: 0.2,
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, rgba(0, 72, 128, 0.1) 0%, rgba(0, 72, 128, 0.05) 100%)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'linear-gradient(135deg, rgba(0, 72, 128, 0.2) 0%, rgba(0, 72, 128, 0.1) 100%)',
                          borderColor: '#0066cc',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 15px rgba(0, 72, 128, 0.3)'
                        }
                      }}
                    >
                      {project.nugetButtonText}
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Box>
                </Card>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  );
}

export default ProjectsPage;
