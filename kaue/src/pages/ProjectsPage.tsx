import { Typography, Box, Container, Button, Chip } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaBox, FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import { SiDotnet, SiDocker } from 'react-icons/si';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';

function ProjectsPage() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const content = {
    pt: {
      title: "Projetos",
      subtitle: "Soluções open-source e APIs desenvolvidas",
      description: "Uma coleção de projetos que demonstram minha paixão por criar ferramentas úteis e código limpo.",
      viewDetails: "Ver detalhes",
      projects: [
        {
          id: "toolsharp",
          name: "ToolSharp",
          description: "Biblioteca de extensões para Task em .NET que simplifica operações assíncronas e melhora a produtividade do desenvolvedor.",
          image: "/images/toolsharp-logo.png",
          technologies: [".NET", "C#", "NuGet"],
          techIcons: [SiDotnet],
          githubUrl: "https://github.com/KaueSMoraes/ToolSharp",
          nugetUrl: "https://www.nuget.org/packages/ToolSharp/",
          color: "#512BD4",
          featured: true
        },
        {
          id: "probat",
          name: "Probat",
          description: "Motor de testes unitários para Protheus com suporte a Code Coverage, facilitando o desenvolvimento de software de qualidade.",
          image: "/images/totvslogo.png",
          technologies: ["ADVPL", "TLPP", "Protheus"],
          techIcons: [],
          githubUrl: "https://github.com/KaueSMoraes/readme-probat",
          color: "#FF6B35",
          featured: true
        },
        {
          id: "towercontrol",
          name: "TowerControl",
          description: "API Web robusta para gerenciamento de servidores Linux, oferecendo monitoramento e controle centralizado.",
          image: "/images/towercontrol-logo.png",
          technologies: ["ASP.NET Core", "Docker", "Linux"],
          techIcons: [SiDotnet, SiDocker],
          githubUrl: "https://github.com/KaueSMoraes/TowerControlApi",
          color: "#10b981",
          featured: false
        }
      ]
    },
    en: {
      title: "Projects",
      subtitle: "Open-source solutions and APIs developed",
      description: "A collection of projects that demonstrate my passion for creating useful tools and clean code.",
      viewDetails: "View details",
      projects: [
        {
          id: "toolsharp",
          name: "ToolSharp",
          description: "Task extension library for .NET that simplifies async operations and improves developer productivity.",
          image: "/images/toolsharp-logo.png",
          technologies: [".NET", "C#", "NuGet"],
          techIcons: [SiDotnet],
          githubUrl: "https://github.com/KaueSMoraes/ToolSharp",
          nugetUrl: "https://www.nuget.org/packages/ToolSharp/",
          color: "#512BD4",
          featured: true
        },
        {
          id: "probat",
          name: "Probat",
          description: "Unit testing engine for Protheus with Code Coverage support, facilitating quality software development.",
          image: "/images/totvslogo.png",
          technologies: ["ADVPL", "TLPP", "Protheus"],
          techIcons: [],
          githubUrl: "https://github.com/KaueSMoraes/readme-probat",
          color: "#FF6B35",
          featured: true
        },
        {
          id: "towercontrol",
          name: "TowerControl",
          description: "Robust Web API for Linux server management, offering centralized monitoring and control.",
          image: "/images/towercontrol-logo.png",
          technologies: ["ASP.NET Core", "Docker", "Linux"],
          techIcons: [SiDotnet, SiDocker],
          githubUrl: "https://github.com/KaueSMoraes/TowerControlApi",
          color: "#10b981",
          featured: false
        }
      ]
    }
  };

  const currentContent = content[language];

  const handleGitHubClick = (url: string, event: React.MouseEvent) => {
    event.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleNuGetClick = (url: string, event: React.MouseEvent) => {
    event.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box sx={{ minHeight: '100vh', pt: { xs: 10, md: 12 }, pb: 8 }}>
      {/* Header */}
      <PageHeader
        title={currentContent.title}
        subtitle={currentContent.subtitle}
        description={currentContent.description}
      />

      <Container maxWidth="lg">
        {/* Projects Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
            gap: 4,
          }}
        >
          {currentContent.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                style={{ height: '100%' }}
              >
                <Box
                  onClick={() => navigate(`/projects/${project.id}`)}
                  sx={{
                    height: '100%',
                    p: 0,
                    borderRadius: '24px',
                    background: 'rgba(15, 15, 25, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                    position: 'relative',
                    '&:hover': {
                      border: `1px solid ${project.color}40`,
                      boxShadow: `0 25px 80px ${project.color}15`,
                      '& .project-image': {
                        transform: 'scale(1.05)',
                      },
                      '& .project-overlay': {
                        opacity: 1,
                      },
                      '& .arrow-icon': {
                        transform: 'translateX(5px)',
                        opacity: 1,
                      },
                    },
                  }}
                >
                  {/* Featured badge */}
                  {project.featured && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        zIndex: 10,
                        px: 2,
                        py: 0.5,
                        borderRadius: '20px',
                        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#fff',
                      }}
                    >
                      Featured
                    </Box>
                  )}

                  {/* Image section */}
                  <Box
                    sx={{
                      position: 'relative',
                      height: '180px',
                      background: `linear-gradient(135deg, ${project.color}20 0%, rgba(15, 15, 25, 0.8) 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                  >
                    <motion.img
                      className="project-image"
                      src={project.image}
                      alt={project.name}
                      style={{
                        maxWidth: '120px',
                        maxHeight: '120px',
                        objectFit: 'contain',
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    {/* Overlay */}
                    <Box
                      className="project-overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(180deg, transparent 0%, ${project.color}30 100%)`,
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                      }}
                    />
                  </Box>

                  {/* Content section */}
                  <Box sx={{ p: 3 }}>
                    {/* Title and arrow */}
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: '#ffffff',
                          fontSize: '1.4rem',
                        }}
                      >
                        {project.name}
                      </Typography>
                      <FaArrowRight
                        className="arrow-icon"
                        style={{
                          color: project.color,
                          opacity: 0.5,
                          transition: 'all 0.3s ease',
                        }}
                      />
                    </Box>

                    {/* Description */}
                    <Typography
                      sx={{
                        color: '#94a3b8',
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        mb: 3,
                        minHeight: '72px',
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Technologies */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                      {project.technologies.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          sx={{
                            background: `${project.color}15`,
                            color: project.color,
                            border: `1px solid ${project.color}30`,
                            fontWeight: 500,
                            fontSize: '0.75rem',
                          }}
                        />
                      ))}
                    </Box>

                    {/* Action buttons */}
                    <Box sx={{ display: 'flex', gap: 1.5 }}>
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<FaGithub />}
                        onClick={(e) => handleGitHubClick(project.githubUrl, e)}
                        sx={{
                          color: '#ffffff',
                          borderColor: 'rgba(255, 255, 255, 0.2)',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          textTransform: 'none',
                          px: 2,
                          py: 0.8,
                          borderRadius: '12px',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderColor: '#ffffff',
                          },
                        }}
                      >
                        GitHub
                      </Button>

                      {project.nugetUrl && (
                        <Button
                          variant="outlined"
                          size="small"
                          startIcon={<FaBox />}
                          onClick={(e) => handleNuGetClick(project.nugetUrl!, e)}
                          sx={{
                            color: '#512BD4',
                            borderColor: '#512BD430',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            textTransform: 'none',
                            px: 2,
                            py: 0.8,
                            borderRadius: '12px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              background: '#512BD415',
                              borderColor: '#512BD4',
                            },
                          }}
                        >
                          NuGet
                        </Button>
                      )}
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </motion.div>
          ))}
        </Box>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Box
            sx={{
              mt: 10,
              p: 6,
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: '#ffffff',
                mb: 2,
                fontSize: { xs: '1.5rem', md: '2rem' },
              }}
            >
              {language === 'pt' ? 'Quer ver mais?' : 'Want to see more?'}
            </Typography>
            <Typography
              sx={{
                color: '#94a3b8',
                mb: 4,
                maxWidth: '500px',
                mx: 'auto',
              }}
            >
              {language === 'pt'
                ? 'Confira meu GitHub para mais projetos e contribuições open-source.'
                : 'Check my GitHub for more projects and open-source contributions.'}
            </Typography>
            <motion.button
              onClick={() => window.open('https://github.com/KaueSMoraes', '_blank')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                fontSize: '1rem',
                fontWeight: 600,
                color: '#ffffff',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)',
              }}
            >
              <FaGithub size={20} />
              {language === 'pt' ? 'Ver GitHub' : 'View GitHub'}
              <FaExternalLinkAlt size={14} />
            </motion.button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default ProjectsPage;
