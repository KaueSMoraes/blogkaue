import { useState } from 'react';
import { Typography, Box, Container, Chip } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import {
  SiDotnet, SiDocker, SiKubernetes, SiReact, SiTypescript,
  SiFlutter, SiDart, SiRedis, SiGooglecloud
} from 'react-icons/si';
import { FaChevronDown, FaBuilding, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { TbBrandCSharp } from "react-icons/tb";

function ExperiencePage() {
  const { language } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const content = {
    pt: {
      title: "Experiência",
      subtitle: "Minha jornada profissional",
      description: "Ao longo da minha carreira, tive a oportunidade de trabalhar com diversas tecnologias e metodologias, sempre buscando me especializar em desenvolvimento de software de alta qualidade.",
      companies: [
        {
          name: "Platform Builders",
          position: "Backend Developer Pleno",
          period: "2025 - Presente",
          location: "Remoto",
          description: "Desenvolvedor Backend especialista no ecossistema .NET/C# para construir e manter microsserviços escaláveis.",
          details: [
            "Desenvolvimento de microsserviços escaláveis utilizando .NET Core e .NET 6+",
            "Implementação de cache distribuído com Redis para otimização de performance",
            "Integração de sistemas via MuleSoft para conectividade entre plataformas",
            "Deploy e gerenciamento de aplicações na Google Cloud Platform (GCP)",
            "Arquitetura de soluções backend robustas e de alta disponibilidade",
            "Colaboração em equipes ágeis com foco em metodologias DevOps e CI/CD"
          ],
          technologies: [
            { name: '.NET', icon: SiDotnet, color: '#512BD4' },
            { name: 'C#', icon: TbBrandCSharp, color: '#239120' },
            { name: 'Redis', icon: SiRedis, color: '#DC382D' },
            { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
            { name: 'Docker', icon: SiDocker, color: '#2496ED' },
            { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' }
          ],
          color: '#3b82f6'
        },
        {
          name: "Agenda Assessoria",
          position: "Desenvolvedor Full Stack",
          period: "Out 2024 - Jan 2025",
          location: "Remoto",
          description: "Desenvolvedor Full Stack trabalhando com desenvolvimento mobile e web.",
          details: [
            "Desenvolvimento de aplicações mobile utilizando Flutter e Dart",
            "Criação de interfaces web responsivas com React e TypeScript",
            "Desenvolvimento de APIs backend com ASP.NET Core e C#",
            "Implementação de sistemas de gerenciamento de pensões públicas",
            "Trabalho com bancos de dados SQL Server e Entity Framework",
            "Desenvolvimento de aplicações disponíveis em todas as lojas"
          ],
          technologies: [
            { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
            { name: 'Dart', icon: SiDart, color: '#0175C2' },
            { name: 'React', icon: SiReact, color: '#61DAFB' },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
            { name: '.NET', icon: SiDotnet, color: '#512BD4' }
          ],
          color: '#8b5cf6'
        },
        {
          name: "Agro Amazônia PA S.A.",
          position: "Analista de Suporte",
          period: "Jan 2021 - Out 2024",
          location: "Belém, PA",
          description: "Analista de Suporte com foco em desenvolvimento backend utilizando ADVPL.",
          details: [
            "Desenvolvimento de soluções customizadas para ERP Protheus",
            "Criação de relatórios e consultas avançadas em ADVPL",
            "Implementação de melhorias e correções no sistema ERP",
            "Suporte técnico especializado para usuários finais",
            "Análise e resolução de problemas complexos do sistema",
            "Trabalho com integrações entre diferentes módulos do ERP"
          ],
          technologies: [
            { name: 'ADVPL', color: '#FF6B35' },
            { name: 'Protheus', color: '#1E3A8A' },
            { name: 'TLPP', color: '#059669' },
            { name: 'SQL', color: '#336791' }
          ],
          color: '#10b981'
        }
      ]
    },
    en: {
      title: "Experience",
      subtitle: "My professional journey",
      description: "Throughout my career, I have had the opportunity to work with various technologies and methodologies, always seeking to specialize in high-quality software development.",
      companies: [
        {
          name: "Platform Builders",
          position: "Mid-Level Backend Developer",
          period: "2025 - Present",
          location: "Remote",
          description: "Backend Developer specializing in the .NET/C# ecosystem to build and maintain scalable microservices.",
          details: [
            "Development of scalable microservices using .NET Core and .NET 6+",
            "Implementation of distributed caching with Redis for performance optimization",
            "System integration via MuleSoft for platform connectivity",
            "Deployment and management of applications on Google Cloud Platform (GCP)",
            "Architecture of robust and high-availability backend solutions",
            "Collaboration in agile teams with focus on DevOps methodologies and CI/CD"
          ],
          technologies: [
            { name: '.NET', icon: SiDotnet, color: '#512BD4' },
            { name: 'C#', icon: TbBrandCSharp, color: '#239120' },
            { name: 'Redis', icon: SiRedis, color: '#DC382D' },
            { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
            { name: 'Docker', icon: SiDocker, color: '#2496ED' },
            { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' }
          ],
          color: '#3b82f6'
        },
        {
          name: "Agenda Assessoria",
          position: "Full Stack Developer",
          period: "Oct 2024 - Jan 2025",
          location: "Remote",
          description: "Full Stack Developer working on mobile and web development.",
          details: [
            "Development of mobile applications using Flutter and Dart",
            "Creation of responsive web interfaces with React and TypeScript",
            "Backend API development with ASP.NET Core and C#",
            "Implementation of public pension management systems",
            "Working with SQL Server databases and Entity Framework",
            "Development of applications available in all app stores"
          ],
          technologies: [
            { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
            { name: 'Dart', icon: SiDart, color: '#0175C2' },
            { name: 'React', icon: SiReact, color: '#61DAFB' },
            { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
            { name: '.NET', icon: SiDotnet, color: '#512BD4' }
          ],
          color: '#8b5cf6'
        },
        {
          name: "Agro Amazônia PA S.A.",
          position: "Support Analyst",
          period: "Jan 2021 - Oct 2024",
          location: "Belém, PA",
          description: "Support Analyst focusing on backend development using ADVPL.",
          details: [
            "Development of custom solutions for Protheus ERP",
            "Creation of advanced reports and queries in ADVPL",
            "Implementation of improvements and fixes in the ERP system",
            "Specialized technical support for end users",
            "Analysis and resolution of complex system problems",
            "Working with integrations between different ERP modules"
          ],
          technologies: [
            { name: 'ADVPL', color: '#FF6B35' },
            { name: 'Protheus', color: '#1E3A8A' },
            { name: 'TLPP', color: '#059669' },
            { name: 'SQL', color: '#336791' }
          ],
          color: '#10b981'
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
        <Box sx={{ position: 'relative', maxWidth: '900px', mx: 'auto' }}>
          <Box
            sx={{
              position: 'absolute',
              left: { xs: '20px', md: '50%' },
              transform: { xs: 'none', md: 'translateX(-50%)' },
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(180deg, #3b82f6, #8b5cf6, #06b6d4)',
              opacity: 0.3,
            }}
          />

          {currentContent.companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                  alignItems: { xs: 'flex-start', md: 'center' },
                  mb: 6,
                  position: 'relative',
                  pl: { xs: '35px', md: 0 },
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    left: { xs: '12px', md: '50%' },
                    transform: { xs: 'none', md: 'translateX(-50%)' },
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: company.color,
                    border: '3px solid #0a0a0f',
                    boxShadow: `0 0 20px ${company.color}60`,
                    zIndex: 10,
                  }}
                />

                {/* Content card */}
                <Box
                  sx={{
                    flex: 1,
                    maxWidth: { xs: '100%', md: '45%' },
                    ml: { xs: 0, md: index % 2 === 0 ? 0 : 'auto' },
                    mr: { xs: 0, md: index % 2 === 0 ? 'auto' : 0 },
                    pl: { xs: 0, md: index % 2 === 0 ? 0 : 4 },
                    pr: { xs: 0, md: index % 2 === 0 ? 4 : 0 },
                  }}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Box
                      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      sx={{
                        p: 3,
                        borderRadius: '20px',
                        background: 'rgba(15, 15, 25, 0.6)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        cursor: 'pointer',
                        transition: 'all 0.4s ease',
                        '&:hover': {
                          border: `1px solid ${company.color}40`,
                          boxShadow: `0 20px 60px ${company.color}15`,
                        },
                      }}
                    >
                      {/* Header */}
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
                        <Box>
                          <Typography
                            variant="h5"
                            sx={{
                              fontWeight: 700,
                              color: '#ffffff',
                              fontSize: '1.3rem',
                              mb: 0.5,
                            }}
                          >
                            {company.position}
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <FaBuilding size={14} color={company.color} />
                            <Typography sx={{ color: company.color, fontWeight: 600, fontSize: '1rem' }}>
                              {company.name}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <FaCalendarAlt size={12} color="#64748b" />
                              <Typography sx={{ color: '#64748b', fontSize: '0.85rem' }}>
                                {company.period}
                              </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                              <FaMapMarkerAlt size={12} color="#64748b" />
                              <Typography sx={{ color: '#64748b', fontSize: '0.85rem' }}>
                                {company.location}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <motion.div
                          animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <FaChevronDown color="#64748b" />
                        </motion.div>
                      </Box>

                      {/* Description */}
                      <Typography
                        sx={{
                          color: '#94a3b8',
                          fontSize: '0.95rem',
                          lineHeight: 1.6,
                          mb: 2,
                        }}
                      >
                        {company.description}
                      </Typography>

                      {/* Expanded content */}
                      <AnimatePresence>
                        {expandedIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ overflow: 'hidden' }}
                          >
                            {/* Details */}
                            <Box sx={{ mb: 3 }}>
                              <Typography
                                sx={{
                                  color: '#ffffff',
                                  fontWeight: 600,
                                  fontSize: '0.9rem',
                                  mb: 1.5,
                                }}
                              >
                                {language === 'pt' ? 'Principais Atividades:' : 'Main Activities:'}
                              </Typography>
                              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                {company.details.map((detail, i) => (
                                  <Box
                                    component="li"
                                    key={i}
                                    sx={{
                                      color: '#94a3b8',
                                      fontSize: '0.85rem',
                                      lineHeight: 1.6,
                                      mb: 0.5,
                                      '&::marker': {
                                        color: company.color,
                                      },
                                    }}
                                  >
                                    {detail}
                                  </Box>
                                ))}
                              </Box>
                            </Box>

                            {/* Technologies */}
                            <Box>
                              <Typography
                                sx={{
                                  color: '#ffffff',
                                  fontWeight: 600,
                                  fontSize: '0.9rem',
                                  mb: 1.5,
                                }}
                              >
                                {language === 'pt' ? 'Tecnologias:' : 'Technologies:'}
                              </Typography>
                              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                {company.technologies.map((tech, i) => {
                                  const TechIcon = 'icon' in tech ? tech.icon : null;
                                  return (
                                    <Chip
                                      key={i}
                                      icon={
                                        TechIcon ? (
                                          <Box sx={{ display: 'flex', alignItems: 'center', ml: 0.5 }}>
                                            <TechIcon size={14} color={tech.color} />
                                          </Box>
                                        ) : undefined
                                      }
                                      label={tech.name}
                                      size="small"
                                      sx={{
                                        background: `${tech.color}15`,
                                        color: '#ffffff',
                                        border: `1px solid ${tech.color}30`,
                                        fontWeight: 500,
                                        fontSize: '0.75rem',
                                        '&:hover': {
                                          background: `${tech.color}25`,
                                        },
                                      }}
                                    />
                                  );
                                })}
                              </Box>
                            </Box>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Box>
                  </motion.div>
                </Box>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default ExperiencePage;
