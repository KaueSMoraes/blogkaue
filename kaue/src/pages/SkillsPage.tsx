import React from 'react';
import { Typography, Box, Card, CardContent, Chip, Avatar } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';
import Breadcrumb from '../components/Breadcrumb';
import { motion } from 'framer-motion';
import { 
  SiDotnet, SiPostgresql, SiMongodb, SiRedis, 
  SiDocker, SiKubernetes, SiReact, SiTypescript, SiJavascript, SiHtml5, 
  SiCss3, SiVite, SiWebpack, SiFlutter, SiDart, SiReact as SiReactNative,
  SiGit, SiGithub, SiLinux, SiN8N, SiNestjs, SiPrisma, SiMui, SiZod  
} from 'react-icons/si';
import { FaAws, FaTerminal, FaNodeJs, FaHorseHead, FaGitlab   } from 'react-icons/fa';
import {VscAzureDevops } from "react-icons/vsc";
import { DiMsqlServer, DiDotnet  } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";


function SkillsPage() {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: "Habilidades",
      description: "As tecnologias e ferramentas que domino e utilizo em meus projetos.",
      categories: {
        backend: {
          title: "Backend",
          technologies: [
            { name: ".NET Core", icon: SiDotnet, color: "#512BD4" },
            { name: "Node.js", icon: FaNodeJs, color: "#339933" },
            { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
            { name: "Prisma", icon: SiPrisma, color: "#512BD4" },
            { name: "C#", icon: TbBrandCSharp, color: "#239120" },
            { name: "ASP.NET", icon: DiDotnet, color: "#512BD4" },
            { name: "Entity Framework", icon: FaHorseHead, color: "#512BD4" },
            { name: "SQL Server", icon: DiMsqlServer, color: "#CC2927" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Redis", icon: SiRedis, color: "#DC382D" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" }
          ]
        },
        frontend: {
          title: "Frontend",
          technologies: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
            { name: "Zod", icon: SiZod, color: "#61DAFB" },
            { name: "CSS3", icon: SiCss3, color: "#1572B6" },
            { name: "Material-UI", icon: SiMui, color: "#0081CB" },
            { name: "Vite", icon: SiVite, color: "#646CFF" },
            { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" }
          ]
        },
        mobile: {
          title: "Mobile",
          technologies: [
            { name: "Flutter", icon: SiFlutter, color: "#02569B" },
            { name: "Dart", icon: SiDart, color: "#0175C2" },
            { name: "React Native", icon: SiReactNative, color: "#61DAFB" }
          ]
        },
        devops: {
          title: "DevOps & Tools",
          technologies: [
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "GitHub", icon: SiGithub, color: "#181717" },
            { name: "Azure DevOps", icon: VscAzureDevops, color: "#0078D4" },
            { name: "AWS", icon: FaAws, color: "#FF9900" },
            { name: "Linux", icon: SiLinux, color: "#FCC624" },
            { name: "GitLab", icon: FaGitlab, color: "#FCA326" },
            { name: "Bash", icon: FaTerminal, color: "#4EAA25" },
            { name: "n8n", icon: SiN8N, color: "#EA4B71" },
            { name: "ADVPL", icon: 'totvs', color: "#1E88E5" }
          ]
        }
      }
    },
    en: {
      title: "Skills",
      description: "The technologies and tools I master and use in my projects.",
      categories: {
        backend: {
          title: "Backend",
          technologies: [
            { name: ".NET Core", icon: SiDotnet, color: "#512BD4" },
            { name: "Node.js", icon: FaNodeJs, color: "#339933" },
            { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
            { name: "Prisma", icon: SiPrisma, color: "#512BD4" },
            { name: "C#", icon: TbBrandCSharp, color: "#239120" },
            { name: "ASP.NET", icon: DiDotnet, color: "#512BD4" },
            { name: "Entity Framework", icon: FaHorseHead, color: "#512BD4" },
            { name: "SQL Server", icon: DiMsqlServer, color: "#CC2927" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Redis", icon: SiRedis, color: "#DC382D" },
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" }
          ]
        },
        frontend: {
          title: "Frontend",
          technologies: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
            { name: "Zod", icon: SiZod, color: "#61DAFB" },
            { name: "CSS3", icon: SiCss3, color: "#1572B6" },
            { name: "Material-UI", icon: SiMui, color: "#0081CB" },
            { name: "Vite", icon: SiVite, color: "#646CFF" },
            { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" }
          ]
        },
        mobile: {
          title: "Mobile",
          technologies: [
            { name: "Flutter", icon: SiFlutter, color: "#02569B" },
            { name: "Dart", icon: SiDart, color: "#0175C2" },
            { name: "React Native", icon: SiReactNative, color: "#61DAFB" }
          ]
        },
        devops: {
          title: "DevOps & Tools",
          technologies: [
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "GitHub", icon: SiGithub, color: "#181717" },
            { name: "Azure DevOps", icon: VscAzureDevops , color: "#0078D4" },
            { name: "AWS", icon: FaAws, color: "#FF9900" },
            { name: "Linux", icon: SiLinux, color: "#FCC624" },
            { name: "GitLab", icon: FaGitlab, color: "#FCA326" },
            { name: "Bash", icon: FaTerminal, color: "#4EAA25" },
            { name: "n8n", icon: SiN8N, color: "#EA4B71" },
            { name: "ADVPL", icon: 'totvs', color: "#1E88E5" }
          ]
        }
      }
    }
  };

  const currentContent = content[language];

  const breadcrumbItems = [
    { label: language === 'pt' ? 'Início' : 'Home', path: '/' },
    { label: language === 'pt' ? 'Habilidades' : 'Skills' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
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
              mb: 1.5
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
              mb: 3
            }}
          >
            {currentContent.description}
          </Typography>
        </motion.div>

      <Box sx={{ 
        flex: 1, 
        overflowY: 'auto', 
        pr: 1,
        pt: 1,
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '2px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
          borderRadius: '2px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
        }
      }}>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
          gap: 2 
        }}>
          {Object.entries(currentContent.categories).map(([categoryKey, category]) => (
            <Box key={categoryKey}>
              <Card
                sx={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.6) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 40px rgba(59, 130, 246, 0.2)',
                    border: '1px solid rgba(59, 130, 246, 0.4)'
                  }
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography 
                    variant="h5" 
                    component="h2"
                    sx={{
                      color: '#ffffff',
                      fontWeight: '700',
                      fontSize: '1.3rem',
                      mb: 2,
                      background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {category.title}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                    {category.technologies.map((tech, index) => (
                      <Chip
                        key={index}
                        avatar={
                          <Avatar sx={{ 
                            bgcolor: 'transparent', 
                            fontSize: '1.2rem',
                            width: 24,
                            height: 24,
                            color: tech.color
                          }}>
                            {tech.icon === 'totvs' ? (
                              <img 
                                src="/images/totvslogo.png" 
                                alt="Totvs" 
                                style={{ 
                                  width: '20px', 
                                  height: '20px',
                                  objectFit: 'contain'
                                }} 
                              />
                            ) : (
                              React.createElement(tech.icon)
                            )}
                          </Avatar>
                        }
                        label={tech.name}
                        sx={{
                          background: `linear-gradient(135deg, ${tech.color}20 0%, ${tech.color}10 100%)`,
                          color: '#ffffff',
                          border: `1px solid ${tech.color}40`,
                          fontWeight: '600',
                          fontSize: '0.85rem',
                          height: '36px',
                          '&:hover': {
                            background: `linear-gradient(135deg, ${tech.color}30 0%, ${tech.color}20 100%)`,
                            transform: 'scale(1.05)',
                            transition: 'all 0.2s ease',
                            boxShadow: `0 4px 15px ${tech.color}30`
                          },
                          '& .MuiChip-avatar': {
                            color: tech.color
                          }
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
    </motion.div>
  );
}

export default SkillsPage;
