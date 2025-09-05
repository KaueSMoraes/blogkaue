import { Typography, Box, Paper, CardMedia } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { motion } from 'framer-motion';

function ProjectDetailPage() {
  const { language } = useLanguage();
  const { projectId } = useParams();

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
        ]
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
        ]
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
        ]
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
        ]
      }
    },
    towercontrol: {
      pt: {
        name: "TowerControl",
        description: "API Web para gerenciamento de servidores Linux",
        image: "/images/towercontrol-logo.png",
        summary: "O projeto consiste em uma API Web em ASP .NET desenvolvida para realizar operações de gerenciamento em servidores Linux que suportam a aplicação Protheus. A API recebe requisições através de diversos controladores, os quais são direcionados para serviços específicos. Estes serviços atuam como ponte com as entidades do sistema, utilizando construtores avançados para manipular objetos e retornar status e resultados para os controladores.",
        technologies: ["ASP .NET", "Serviços RESTful", "Servidores Linux", "Aplicação Protheus", "Kubernetes", "Docker", "CI/CD", "Code Analysis"],
        features: [
          "Gerenciamento de servidores Linux",
          "Integração com a aplicação Protheus",
          "Utilização de serviços para manipulação de entidades",
          "Retorno de status e resultados para os controladores"
        ]
      },
      en: {
        name: "TowerControl",
        description: "Web API for Linux server management",
        image: "/images/towercontrol-logo.png",
        summary: "The project consists of a Web API in ASP .NET developed to perform management operations on Linux servers that support the Protheus application. The API receives requests through various controllers, which are directed to specific services. These services act as a bridge with system entities, using advanced constructors to manipulate objects and return status and results to the controllers.",
        technologies: ["ASP .NET", "RESTful Services", "Linux Servers", "Protheus Application", "Kubernetes", "Docker", "CI/CD", "Code Analysis"],
        features: [
          "Linux server management",
          "Integration with Protheus application",
          "Use of services for entity manipulation",
          "Return of status and results to controllers"
        ]
      }
    },
  };

  const project = projects[projectId as keyof typeof projects]?.[language] || projects.toolsharp[language];

  const breadcrumbItems = [
    { label: language === 'pt' ? 'Início' : 'Home', path: '/' },
    { label: language === 'pt' ? 'Projetos' : 'Projects', path: '/projects' },
    { label: project.name }
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
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <Paper 
            elevation={0}
            sx={{ 
              p: 4, 
              mb: 4, 
              background: 'linear-gradient(145deg, rgba(30, 30, 60, 0.8) 0%, rgba(20, 20, 40, 0.9) 100%)',
              backdropFilter: 'blur(20px)',
              borderRadius: 3,
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.1)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)',
                zIndex: 1
              }
            }}
          >
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
          <CardMedia
            component="img"
            image={project.image}
            alt={project.name}
            sx={{
              width: { xs: '200px', md: '300px' },
              height: { xs: '200px', md: '300px' },
              objectFit: 'contain',
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 3,
              p: 2
            }}
          />
          
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="h3" 
              component="h1" 
              gutterBottom
              sx={{
                mt: 3,
                color: '#ffffff',
                fontWeight: '700',
                fontSize: '2.5rem',
                background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
                letterSpacing: '0.5px',
                mb: 2
              }}
            >
              {project.name}
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{
                color: '#a1a1aa',
                fontSize: '1.3rem',
                mb: 3,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                letterSpacing: '0.3px'
              }}
            >
              {project.description}
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography 
                variant="h6" 
                sx={{
                  color: '#ffffff',
                  fontSize: '1.1rem',
                  mb: 2,
                  fontWeight: '600'
                }}
              >
                {language === 'pt' ? 'Tecnologias:' : 'Technologies:'}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {project.technologies.map((tech) => (
                  <Box
                    key={tech}
                    sx={{
                      px: 2,
                      py: 1,
                      backgroundColor: 'rgba(59, 130, 246, 0.2)',
                      borderRadius: 2,
                      border: '1px solid rgba(59, 130, 246, 0.3)',
                      color: '#ffffff',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}
                  >
                    {tech}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
          </Paper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Paper 
            elevation={0}
            sx={{ 
              p: 4, 
              mb: 4, 
              background: 'linear-gradient(145deg, rgba(30, 30, 60, 0.6) 0%, rgba(20, 20, 40, 0.8) 100%)',
              backdropFilter: 'blur(20px)',
              borderRadius: 3,
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.1)'
            }}
          >
        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{
            color: '#ffffff',
            fontWeight: '700',
            fontSize: '1.8rem',
            mb: 3,
            background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
            letterSpacing: '0.5px'
          }}
        >
          {language === 'pt' ? 'Sobre o Projeto' : 'About the Project'}
        </Typography>
        
        <Typography 
          variant="body1" 
          sx={{ 
            lineHeight: 1.8, 
            fontSize: '1.2rem',
            color: '#e2e8f0',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
            letterSpacing: '0.3px',
            whiteSpace: 'pre-line'
          }}
        >
          {project.summary}
        </Typography>
      </Paper>

      <Paper 
        elevation={0}
        sx={{ 
          p: 4, 
          background: 'linear-gradient(145deg, rgba(30, 30, 60, 0.6) 0%, rgba(20, 20, 40, 0.8) 100%)',
          backdropFilter: 'blur(20px)',
          borderRadius: 3,
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.1)'
        }}
      >
        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom
          sx={{
            color: '#ffffff',
            fontWeight: '700',
            fontSize: '1.8rem',
            mb: 3,
            background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
            letterSpacing: '0.5px'
          }}
        >
          {language === 'pt' ? 'Principais Funcionalidades' : 'Key Features'}
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {project.features.map((feature, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                p: 2,
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                borderRadius: 2,
                border: '1px solid rgba(59, 130, 246, 0.2)'
              }}
            >
              <Box
                sx={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#3b82f6',
                  borderRadius: '50%',
                  flexShrink: 0
                }}
              />
              <Typography 
                sx={{
                  color: '#e2e8f0',
                  fontSize: '1.1rem',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                  letterSpacing: '0.2px'
                }}
              >
                {feature}
              </Typography>
            </Box>
          ))}
        </Box>
          </Paper>
        </motion.div>
      </Box>
    </motion.div>
  );
}

export default ProjectDetailPage;
