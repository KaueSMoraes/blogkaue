import { Typography, Box, Container } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import {
  SiDotnet, SiPostgresql, SiMongodb, SiRedis,
  SiDocker, SiKubernetes, SiReact, SiTypescript, SiJavascript, SiHtml5,
  SiCss3, SiVite, SiWebpack, SiFlutter, SiDart, SiReact as SiReactNative,
  SiGit, SiGithub, SiLinux, SiN8N, SiNestjs, SiPrisma, SiMui, SiZod
} from 'react-icons/si';
import { FaAws, FaTerminal, FaNodeJs, FaHorseHead, FaGitlab, FaServer, FaCode, FaMobile, FaTools } from 'react-icons/fa';
import { VscAzureDevops } from "react-icons/vsc";
import { DiMsqlServer, DiDotnet } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";

function SkillsPage() {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: "Habilidades",
      subtitle: "Stack técnico completo",
      description: "As tecnologias e ferramentas que domino e utilizo em meus projetos para criar soluções robustas e escaláveis.",
      categories: [
        {
          title: "Backend",
          icon: FaServer,
          color: "#3b82f6",
          technologies: [
            { name: ".NET Core", icon: SiDotnet, color: "#512BD4" },
            { name: "Node.js", icon: FaNodeJs, color: "#339933" },
            { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
            { name: "C#", icon: TbBrandCSharp, color: "#239120" },
            { name: "ASP.NET", icon: DiDotnet, color: "#512BD4" },
            { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
            { name: "Entity Framework", icon: FaHorseHead, color: "#512BD4" },
            { name: "SQL Server", icon: DiMsqlServer, color: "#CC2927" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Redis", icon: SiRedis, color: "#DC382D" },
          ]
        },
        {
          title: "Frontend",
          icon: FaCode,
          color: "#8b5cf6",
          technologies: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS3", icon: SiCss3, color: "#1572B6" },
            { name: "Material-UI", icon: SiMui, color: "#0081CB" },
            { name: "Zod", icon: SiZod, color: "#3068B7" },
            { name: "Vite", icon: SiVite, color: "#646CFF" },
            { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
          ]
        },
        {
          title: "Mobile",
          icon: FaMobile,
          color: "#06b6d4",
          technologies: [
            { name: "Flutter", icon: SiFlutter, color: "#02569B" },
            { name: "Dart", icon: SiDart, color: "#0175C2" },
            { name: "React Native", icon: SiReactNative, color: "#61DAFB" },
          ]
        },
        {
          title: "DevOps & Tools",
          icon: FaTools,
          color: "#10b981",
          technologies: [
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "GitHub", icon: SiGithub, color: "#ffffff" },
            { name: "GitLab", icon: FaGitlab, color: "#FCA326" },
            { name: "Azure DevOps", icon: VscAzureDevops, color: "#0078D4" },
            { name: "AWS", icon: FaAws, color: "#FF9900" },
            { name: "Linux", icon: SiLinux, color: "#FCC624" },
            { name: "Bash", icon: FaTerminal, color: "#4EAA25" },
            { name: "n8n", icon: SiN8N, color: "#EA4B71" },
          ]
        }
      ]
    },
    en: {
      title: "Skills",
      subtitle: "Complete tech stack",
      description: "The technologies and tools I master and use in my projects to create robust and scalable solutions.",
      categories: [
        {
          title: "Backend",
          icon: FaServer,
          color: "#3b82f6",
          technologies: [
            { name: ".NET Core", icon: SiDotnet, color: "#512BD4" },
            { name: "Node.js", icon: FaNodeJs, color: "#339933" },
            { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
            { name: "C#", icon: TbBrandCSharp, color: "#239120" },
            { name: "ASP.NET", icon: DiDotnet, color: "#512BD4" },
            { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
            { name: "Entity Framework", icon: FaHorseHead, color: "#512BD4" },
            { name: "SQL Server", icon: DiMsqlServer, color: "#CC2927" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "Redis", icon: SiRedis, color: "#DC382D" },
          ]
        },
        {
          title: "Frontend",
          icon: FaCode,
          color: "#8b5cf6",
          technologies: [
            { name: "React", icon: SiReact, color: "#61DAFB" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
            { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
            { name: "CSS3", icon: SiCss3, color: "#1572B6" },
            { name: "Material-UI", icon: SiMui, color: "#0081CB" },
            { name: "Zod", icon: SiZod, color: "#3068B7" },
            { name: "Vite", icon: SiVite, color: "#646CFF" },
            { name: "Webpack", icon: SiWebpack, color: "#8DD6F9" },
          ]
        },
        {
          title: "Mobile",
          icon: FaMobile,
          color: "#06b6d4",
          technologies: [
            { name: "Flutter", icon: SiFlutter, color: "#02569B" },
            { name: "Dart", icon: SiDart, color: "#0175C2" },
            { name: "React Native", icon: SiReactNative, color: "#61DAFB" },
          ]
        },
        {
          title: "DevOps & Tools",
          icon: FaTools,
          color: "#10b981",
          technologies: [
            { name: "Docker", icon: SiDocker, color: "#2496ED" },
            { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
            { name: "Git", icon: SiGit, color: "#F05032" },
            { name: "GitHub", icon: SiGithub, color: "#ffffff" },
            { name: "GitLab", icon: FaGitlab, color: "#FCA326" },
            { name: "Azure DevOps", icon: VscAzureDevops, color: "#0078D4" },
            { name: "AWS", icon: FaAws, color: "#FF9900" },
            { name: "Linux", icon: SiLinux, color: "#FCC624" },
            { name: "Bash", icon: FaTerminal, color: "#4EAA25" },
            { name: "n8n", icon: SiN8N, color: "#EA4B71" },
          ]
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <Box sx={{ minHeight: '100vh', pt: { xs: 10, md: 12 }, pb: 8 }}>
      {/* Header */}
      <PageHeader
        title={currentContent.title}
        subtitle={currentContent.subtitle}
        description={currentContent.description}
      />

      <Container maxWidth="lg">
        {/* Skills Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
          }}
        >
          {currentContent.categories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <Box
                  sx={{
                    p: 4,
                    borderRadius: '24px',
                    background: 'rgba(15, 15, 25, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    height: '100%',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      border: `1px solid ${category.color}30`,
                      boxShadow: `0 20px 60px ${category.color}10`,
                    },
                  }}
                >
                  {/* Category header */}
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                    <Box
                      sx={{
                        width: 50,
                        height: 50,
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: `linear-gradient(135deg, ${category.color}30 0%, ${category.color}10 100%)`,
                        border: `1px solid ${category.color}30`,
                      }}
                    >
                      <CategoryIcon size={24} color={category.color} />
                    </Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: '#ffffff',
                        fontSize: '1.3rem',
                      }}
                    >
                      {category.title}
                    </Typography>
                  </Box>

                  {/* Technologies grid */}
                  <Box
                    sx={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
                      gap: 2,
                    }}
                  >
                    {category.technologies.map((tech, techIndex) => {
                      const TechIcon = tech.icon;
                      return (
                        <motion.div
                          key={tech.name}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: categoryIndex * 0.1 + techIndex * 0.02 }}
                          whileHover={{ y: -5, scale: 1.05 }}
                        >
                          <Box
                            sx={{
                              p: 2,
                              borderRadius: '16px',
                              background: 'rgba(255, 255, 255, 0.03)',
                              border: '1px solid rgba(255, 255, 255, 0.05)',
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              gap: 1.5,
                              transition: 'all 0.3s ease',
                              cursor: 'default',
                              '&:hover': {
                                background: `${tech.color}10`,
                                border: `1px solid ${tech.color}30`,
                                boxShadow: `0 10px 30px ${tech.color}15`,
                                '& .tech-icon': {
                                  transform: 'scale(1.2)',
                                  color: tech.color,
                                },
                                '& .tech-name': {
                                  color: '#ffffff',
                                },
                              },
                            }}
                          >
                            <Box
                              className="tech-icon"
                              sx={{
                                fontSize: '2rem',
                                color: tech.color,
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <TechIcon />
                            </Box>
                            <Typography
                              className="tech-name"
                              sx={{
                                fontSize: '0.8rem',
                                fontWeight: 500,
                                color: '#94a3b8',
                                textAlign: 'center',
                                transition: 'color 0.3s ease',
                              }}
                            >
                              {tech.name}
                            </Typography>
                          </Box>
                        </motion.div>
                      );
                    })}
                  </Box>
                </Box>
              </motion.div>
            );
          })}
        </Box>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <Box
            sx={{
              mt: 10,
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap: 3,
            }}
          >
            {[
              { number: '4+', label: language === 'pt' ? 'Anos de experiência' : 'Years of experience', color: '#3b82f6' },
              { number: '30+', label: language === 'pt' ? 'Tecnologias' : 'Technologies', color: '#8b5cf6' },
              { number: '3', label: language === 'pt' ? 'Projetos open-source' : 'Open-source projects', color: '#06b6d4' },
              { number: '∞', label: language === 'pt' ? 'Vontade de aprender' : 'Willingness to learn', color: '#10b981' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Box
                  sx={{
                    p: 4,
                    borderRadius: '20px',
                    background: 'rgba(15, 15, 25, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      border: `1px solid ${stat.color}30`,
                      boxShadow: `0 15px 40px ${stat.color}10`,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '2.5rem',
                      fontWeight: 800,
                      color: stat.color,
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.9rem',
                      color: '#64748b',
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default SkillsPage;
