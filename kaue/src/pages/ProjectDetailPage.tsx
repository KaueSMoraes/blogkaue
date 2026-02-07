import { Typography, Box, Container, Chip, Button } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCheck } from 'react-icons/fa';

function ProjectDetailPage() {
  const { language } = useLanguage();
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projects = {
    toolsharp: {
      pt: {
        name: "ToolSharp",
        description: "Biblioteca de extensões para Task em .NET",
        image: "/images/toolsharp-logo.png",
        summary: "ToolSharp é uma biblioteca leve de métodos de extensão para Task em .NET, projetada para simplificar o uso de tarefas assíncronas com mais segurança, clareza e menos código repetitivo. Ela permite executar tarefas de forma desacoplada (fire-and-forget) com tratamento de erros integrado, possibilitando aplicações assíncronas mais limpas e robustas.",
        technologies: ["C#", ".NET", "NuGet", "Async/Await"],
        features: [
          "Métodos de extensão para Task",
          "Execução desacoplada (fire-and-forget)",
          "Tratamento de erros integrado",
          "Código mais limpo e seguro"
        ],
        githubUrl: "https://github.com/KaueSMoraes/ToolSharp",
        nugetUrl: "https://www.nuget.org/packages/ToolSharp/",
        color: "#512BD4"
      },
      en: {
        name: "ToolSharp",
        description: "Task extension library for .NET",
        image: "/images/toolsharp-logo.png",
        summary: "ToolSharp is a lightweight library of extension methods for Task in .NET, designed to simplify the use of asynchronous tasks with more safety, clarity, and less boilerplate code. It allows you to execute tasks in a decoupled (fire-and-forget) way with integrated error handling, enabling cleaner and more robust asynchronous applications.",
        technologies: ["C#", ".NET", "NuGet", "Async/Await"],
        features: [
          "Extension methods for Task",
          "Decoupled execution (fire-and-forget)",
          "Integrated error handling",
          "Cleaner and safer code"
        ],
        githubUrl: "https://github.com/KaueSMoraes/ToolSharp",
        nugetUrl: "https://www.nuget.org/packages/ToolSharp/",
        color: "#512BD4"
      }
    },
    probat: {
      pt: {
        name: "Probat",
        description: "Motor de testes unitários para Protheus",
        image: "/images/totvslogo.png",
        summary: "O PROBAT é um motor de testes unitários que executa scripts específicos configurados na aplicação servidora Protheus. Ele é orientado por programas desenvolvidos em TLPP, e o próprio framework da linguagem executa testes unitários, coordenando a execução e marcando uma análise criteriosa sobre os nossos fontes. Apontado para a pasta 'tests', dentro do master, ele utiliza uma infraestrutura dentro do Appserver para rodar os scripts, e em tempo de execução, analisa a cobertura de código e emite uma porcentagem, denominada Code Coverage.",
        technologies: ["TLPP", "ADVPL", "Protheus", "Appserver", "Code Coverage"],
        features: [
          "Execução de scripts específicos configurados",
          "Orientado por programas em TLPP",
          "Análise criteriosa dos fontes",
          "Code Coverage em tempo de execução"
        ],
        githubUrl: "https://github.com/KaueSMoraes/readme-probat",
        nugetUrl: undefined,
        color: "#FF6B35"
      },
      en: {
        name: "Probat",
        description: "Unit testing engine for Protheus",
        image: "/images/totvslogo.png",
        summary: "PROBAT is a unit testing engine that executes specific scripts configured in the Protheus server application. It is driven by programs developed in TLPP, and the language framework itself executes unit tests, coordinating execution and performing a critical analysis of our source code. Pointed to the 'tests' folder within the master, it uses infrastructure within the Appserver to run scripts, and at runtime, analyzes code coverage and outputs a percentage, called Code Coverage.",
        technologies: ["TLPP", "ADVPL", "Protheus", "Appserver", "Code Coverage"],
        features: [
          "Execution of specifically configured scripts",
          "Driven by TLPP programs",
          "Critical analysis of source code",
          "Real-time Code Coverage analysis"
        ],
        githubUrl: "https://github.com/KaueSMoraes/readme-probat",
        nugetUrl: undefined,
        color: "#FF6B35"
      }
    },
    towercontrol: {
      pt: {
        name: "TowerControl",
        description: "API Web para gerenciamento de servidores Linux",
        image: "/images/towercontrol-logo.png",
        summary: "O projeto consiste em uma API Web em ASP .NET desenvolvida para realizar operações de gerenciamento em servidores Linux que suportam a aplicação Protheus. A API recebe requisições através de diversos controladores, os quais são direcionados para serviços específicos. Estes serviços atuam como ponte com as entidades do sistema, utilizando construtores avançados para manipular objetos e retornar status e resultados para os controladores.",
        technologies: ["ASP .NET", "RESTful", "Linux", "Protheus", "Kubernetes", "Docker", "CI/CD"],
        features: [
          "Gerenciamento de servidores Linux",
          "Integração com a aplicação Protheus",
          "Utilização de serviços para manipulação de entidades",
          "Retorno de status e resultados para os controladores"
        ],
        githubUrl: "https://github.com/KaueSMoraes/TowerControlApi",
        nugetUrl: undefined,
        color: "#10b981"
      },
      en: {
        name: "TowerControl",
        description: "Web API for Linux server management",
        image: "/images/towercontrol-logo.png",
        summary: "The project consists of a Web API in ASP .NET developed to perform management operations on Linux servers that support the Protheus application. The API receives requests through various controllers, which are directed to specific services. These services act as a bridge with system entities, using advanced constructors to manipulate objects and return status and results to the controllers.",
        technologies: ["ASP .NET", "RESTful", "Linux", "Protheus", "Kubernetes", "Docker", "CI/CD"],
        features: [
          "Linux server management",
          "Integration with Protheus application",
          "Use of services for entity manipulation",
          "Return of status and results to controllers"
        ],
        githubUrl: "https://github.com/KaueSMoraes/TowerControlApi",
        nugetUrl: undefined,
        color: "#10b981"
      }
    },
  };

  const project = projects[projectId as keyof typeof projects]?.[language] || projects.toolsharp[language];

  return (
    <Box sx={{ minHeight: '100vh', pt: { xs: 10, md: 12 }, pb: 8 }}>
      <Container maxWidth="lg">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Button
            onClick={() => navigate('/projects')}
            startIcon={<FaArrowLeft />}
            sx={{
              color: '#94a3b8',
              textTransform: 'none',
              fontSize: '0.95rem',
              mb: 4,
              '&:hover': {
                color: '#ffffff',
                background: 'rgba(255, 255, 255, 0.05)',
              },
            }}
          >
            {language === 'pt' ? 'Voltar para Projetos' : 'Back to Projects'}
          </Button>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 6,
              mb: 8,
              p: 4,
              borderRadius: '32px',
              background: 'rgba(15, 15, 25, 0.6)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Background glow */}
            <Box
              sx={{
                position: 'absolute',
                top: '-50%',
                right: '-20%',
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${project.color}15 0%, transparent 70%)`,
                pointerEvents: 'none',
              }}
            />

            {/* Image */}
            <Box
              sx={{
                flex: '0 0 auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                sx={{
                  width: { xs: '200px', md: '280px' },
                  height: { xs: '200px', md: '280px' },
                  borderRadius: '24px',
                  background: `linear-gradient(135deg, ${project.color}20 0%, rgba(15, 15, 25, 0.8) 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 4,
                }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Box>

            {/* Content */}
            <Box sx={{ flex: 1, position: 'relative', zIndex: 1 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                }}
              >
                {project.name}
              </Typography>

              <Typography
                sx={{
                  fontSize: '1.3rem',
                  color: project.color,
                  fontWeight: 500,
                  mb: 3,
                }}
              >
                {project.description}
              </Typography>

              {/* Technologies */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                {project.technologies.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    sx={{
                      background: `${project.color}15`,
                      color: '#ffffff',
                      border: `1px solid ${project.color}30`,
                      fontWeight: 500,
                      fontSize: '0.85rem',
                    }}
                  />
                ))}
              </Box>

              {/* Action buttons */}
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <motion.button
                  onClick={() => window.open(project.githubUrl, '_blank')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.8rem 1.5rem',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    boxShadow: '0 8px 30px rgba(59, 130, 246, 0.3)',
                  }}
                >
                  <FaGithub size={18} />
                  {language === 'pt' ? 'Ver no GitHub' : 'View on GitHub'}
                  <FaExternalLinkAlt size={12} />
                </motion.button>

                {project.nugetUrl && (
                  <motion.button
                    onClick={() => window.open(project.nugetUrl, '_blank')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.8rem 1.5rem',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: '#512BD4',
                      background: 'transparent',
                      border: '2px solid #512BD4',
                      borderRadius: '12px',
                      cursor: 'pointer',
                    }}
                  >
                    {language === 'pt' ? 'Ver no NuGet' : 'View on NuGet'}
                    <FaExternalLinkAlt size={12} />
                  </motion.button>
                )}
              </Box>
            </Box>
          </Box>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              mb: 6,
              p: 4,
              borderRadius: '24px',
              background: 'rgba(15, 15, 25, 0.6)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: '#ffffff',
                mb: 3,
                fontSize: { xs: '1.5rem', md: '2rem' },
              }}
            >
              {language === 'pt' ? 'Sobre o Projeto' : 'About the Project'}
            </Typography>

            <Typography
              sx={{
                color: '#94a3b8',
                fontSize: '1.1rem',
                lineHeight: 1.8,
              }}
            >
              {project.summary}
            </Typography>
          </Box>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              p: 4,
              borderRadius: '24px',
              background: 'rgba(15, 15, 25, 0.6)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                color: '#ffffff',
                mb: 4,
                fontSize: { xs: '1.5rem', md: '2rem' },
              }}
            >
              {language === 'pt' ? 'Principais Funcionalidades' : 'Key Features'}
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 2,
              }}
            >
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      p: 3,
                      borderRadius: '16px',
                      background: `${project.color}10`,
                      border: `1px solid ${project.color}20`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: `${project.color}15`,
                        border: `1px solid ${project.color}30`,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: project.color,
                        flexShrink: 0,
                      }}
                    >
                      <FaCheck size={14} color="#ffffff" />
                    </Box>
                    <Typography
                      sx={{
                        color: '#e2e8f0',
                        fontSize: '1rem',
                        fontWeight: 500,
                      }}
                    >
                      {feature}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default ProjectDetailPage;
