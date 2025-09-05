import React, { useState } from 'react';
import { Typography, Box, Chip, Avatar, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';
import Breadcrumb from '../components/Breadcrumb';
import { motion } from 'framer-motion';
import { 
  SiDotnet, SiDocker, SiKubernetes, SiReact, SiTypescript, 
  SiFlutter, SiDart, SiRedis, SiGooglecloud
} from 'react-icons/si';
import { FaCloud } from 'react-icons/fa';
import { TbBrandCSharp } from "react-icons/tb";

function ExperiencePage() {
  const { language } = useLanguage();
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const content = {
    pt: {
      title: "Experiência Profissional",
      description: "Minha jornada profissional e conquistas ao longo dos anos.",
      intro: "Ao longo da minha carreira, tive a oportunidade de trabalhar com diversas tecnologias e metodologias, sempre buscando me especializar em desenvolvimento de software de alta complexidade. Minha experiência abrange desde desenvolvimento desktop até aplicações web e mobile modernas.",
      companies: {
        builders: {
          name: "Platform Builders",
          position: "Backend Developer Pleno",
          period: "2025 - Presente",
          description: "Na Builders, atuo como Desenvolvedor Backend especialista no ecossistema .NET/C# para construir e manter microsserviços escaláveis, utilizando Redis, MuleSoft para integrações e implantando soluções na Google Cloud (GCP).",
          details: [
            "Desenvolvimento de microsserviços escaláveis utilizando .NET Core e .NET 6+",
            "Implementação de cache distribuído com Redis para otimização de performance",
            "Integração de sistemas via MuleSoft para conectividade entre plataformas",
            "Deploy e gerenciamento de aplicações na Google Cloud Platform (GCP)",
            "Arquitetura de soluções backend robustas e de alta disponibilidade",
            "Colaboração em equipes ágeis com foco em metodologias DevOps e CI/CD"
          ]
        },
        agenda: {
          name: "Agenda Assessoria",
          position: "Desenvolvedor Full Stack",
          period: "Out 2024 - Set 2025",
          description: "Na Agenda Assessoria, atuei como Desenvolvedor Full Stack, trabalhando tanto com desenvolvimento mobile quanto web. Esta experiência me permitiu expandir significativamente meu conhecimento em tecnologias modernas e práticas de desenvolvimento.",
          details: [
            "Desenvolvimento de aplicações mobile utilizando Flutter e Dart",
            "Criação de interfaces web responsivas com React e TypeScript",
            "Desenvolvimento de APIs backend com ASP.NET Core e C#",
            "Implementação de sistemas de gerenciamento de pensões públicas",
            "Trabalho com bancos de dados SQL Server e Entity Framework",
            "Desenvolvimento de aplicações disponíveis em todas as lojas de aplicativos"
          ]
        },
        agro: {
          name: "Agro Amazônia PA S.A.",
          position: "Analista de Suporte",
          period: "Jan 2021 - Out 2024",
          description: "Na Agro Amazônia, trabalhei como Analista de Suporte com foco em desenvolvimento backend utilizando ADVPL (Advanced Protheus Language). Esta experiência foi fundamental para consolidar meus conhecimentos em sistemas ERP e desenvolvimento de soluções empresariais.",
          details: [
            "Desenvolvimento de soluções customizadas para ERP Protheus",
            "Criação de relatórios e consultas avançadas em ADVPL",
            "Implementação de melhorias e correções no sistema ERP",
            "Suporte técnico especializado para usuários finais",
            "Análise e resolução de problemas complexos do sistema",
            "Trabalho com integrações entre diferentes módulos do ERP"
          ]
        }
      }
    },
    en: {
      title: "Professional Experience",
      description: "My professional journey and achievements over the years.",
      intro: "Throughout my career, I have had the opportunity to work with various technologies and methodologies, always seeking to specialize in high-complexity software development. My experience ranges from desktop development to modern web and mobile applications.",
      companies: {
        builders: {
          name: "Platform Builders",
          position: "Mid-Level Backend Developer",
          period: "2025 - Present",
          description: "At Builders, I work as a Mid Backend Developer specializing in the .NET/C# ecosystem to build and maintain scalable microservices, leveraging Redis, MuleSoft for integrations, and deploying solutions on Google Cloud (GCP).",
          details: [
            "Development of scalable microservices using .NET Core and .NET 6+",
            "Implementation of distributed caching with Redis for performance optimization",
            "System integration via MuleSoft for platform connectivity",
            "Deployment and management of applications on Google Cloud Platform (GCP)",
            "Architecture of robust and high-availability backend solutions",
            "Collaboration in agile teams with focus on DevOps methodologies and CI/CD"
          ]
        },
        agenda: {
          name: "Agenda Assessoria",
          position: "Full Stack Developer",
          period: "Oct 2024 - Set 2025",
          description: "At Agenda Assessoria, I worked as a Full Stack Developer on both mobile and web projects, an experience that allowed me to significantly expand my knowledge of modern technologies and development practices.",
          details: [
            "Development of mobile applications using Flutter and Dart",
            "Creation of responsive web interfaces with React and TypeScript",
            "Backend API development with ASP.NET Core and C#",
            "Implementation of public pension management systems",
            "Working with SQL Server databases and Entity Framework",
            "Development of applications available in all app stores"
          ]
        },
        agro: {
          name: "Agro Amazônia PA S.A.",
          position: "Support Analyst",
          period: "Jan 2021 - Oct 2024",
          description: "At Agro Amazônia, I worked as a Support Analyst focusing on backend development using ADVPL (Advanced Protheus Language). This experience was fundamental to consolidate my knowledge in ERP systems and enterprise solution development.",
          details: [
            "Development of custom solutions for Protheus ERP",
            "Creation of advanced reports and queries in ADVPL",
            "Implementation of improvements and fixes in the ERP system",
            "Specialized technical support for end users",
            "Analysis and resolution of complex system problems",
            "Working with integrations between different ERP modules"
          ]
        }
      }
    }
  };

  const currentContent = content[language];

  const breadcrumbItems = [
    { label: language === 'pt' ? 'Início' : 'Home', path: '/' },
    { label: language === 'pt' ? 'Experiência' : 'Experience' }
  ];

  const getTechIcons = (company: string) => {
    const techIcons = {
      builders: [
        { name: '.NET', icon: SiDotnet, color: '#512BD4' },
        { name: 'C#', icon: TbBrandCSharp, color: '#239120' },
        { name: 'Redis', icon: SiRedis, color: '#DC382D' },
        { name: 'MuleSoft', icon: FaCloud, color: '#00A0DF' },
        { name: 'Google Cloud', icon: SiGooglecloud, color: '#4285F4' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' }
      ],
      agenda: [
        { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
        { name: 'Dart', icon: SiDart, color: '#0175C2' },
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'ASP.NET Core', icon: SiDotnet, color: '#512BD4' },
        { name: 'Entity Framework', icon: SiDotnet, color: '#512BD4' }
      ],
      agro: [
        { name: 'ADVPL', icon: 'totvs', color: '#FF6B35' },
        { name: 'Protheus', icon: 'totvs', color: '#1E3A8A' },
        { name: 'TLPP', icon: 'totvs', color: '#059669' },
        { name: 'SQL', icon: 'totvs', color: '#336791' },
        { name: 'ERP', icon: 'totvs', color: '#7C3AED' }
      ]
    };
    return techIcons[company as keyof typeof techIcons] || [];
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <Box sx={{ flexShrink: 0 }}>
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
                fontWeight: '700',
                color: '#ffffff',
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
                mb: 3
              }}
            >
              {currentContent.intro}
            </Typography>
          </motion.div>
        </Box>

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 1.5, 
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
        {Object.entries(currentContent.companies).map(([key, company]) => (
          <Accordion
            key={key}
            expanded={expanded === key}
            onChange={handleChange(key)}
            sx={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(51, 65, 85, 0.6) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              borderRadius: '12px !important',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
              '&:before': {
                display: 'none'
              },
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 30px rgba(59, 130, 246, 0.2)',
                border: '1px solid rgba(59, 130, 246, 0.4)'
              }
            }}
          >
            <AccordionSummary
              expandIcon={<Typography sx={{ color: '#3b82f6', fontSize: '1.5rem', fontWeight: 'bold' }}>▼</Typography>}
              sx={{
                '& .MuiAccordionSummary-content': {
                  margin: '12px 0'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Avatar
                  sx={{
                    width: 50,
                    height: 50,
                    mr: 2,
                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                    fontSize: '1.3rem',
                    fontWeight: 'bold'
                  }}
                >
                  {company.name.charAt(0)}
                </Avatar>
                <Box sx={{ flex: 1 }}>
                  <Typography 
                    variant="h6" 
                    component="h2"
                    sx={{
                      color: '#ffffff',
                      fontWeight: '700',
                      fontSize: '1.2rem',
                      mb: 0.5
                    }}
                  >
                    {company.name}
                  </Typography>
                  <Typography 
                    variant="body1"
                    sx={{
                      color: '#3b82f6',
                      fontWeight: '600',
                      fontSize: '1rem',
                      mb: 0.5
                    }}
                  >
                    {company.position}
                  </Typography>
                  <Typography 
                    variant="body2"
                    sx={{
                      color: '#94a3b8',
                      fontSize: '0.9rem'
                    }}
                  >
                    {company.period}
                  </Typography>
                </Box>
              </Box>
            </AccordionSummary>
            
            <AccordionDetails sx={{ pt: 0 }}>
              <Typography 
                variant="body1"
                sx={{
                  color: '#e2e8f0',
                  fontSize: '0.95rem',
                  lineHeight: 1.6,
                  mb: 2,
                  textAlign: 'justify'
                }}
              >
                {company.description}
              </Typography>

              <Box sx={{ mb: 2 }}>
                <Typography 
                  variant="h6"
                  sx={{
                    color: '#ffffff',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    mb: 1
                  }}
                >
                  {language === 'pt' ? 'Principais Atividades:' : 'Main Activities:'}
                </Typography>
                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                  {company.details.map((detail, index) => (
                    <Typography 
                      key={index}
                      component="li"
                      sx={{
                        color: '#cbd5e1',
                        fontSize: '0.85rem',
                        lineHeight: 1.5,
                        mb: 0.3,
                        '&::marker': {
                          color: '#3b82f6'
                        }
                      }}
                    >
                      {detail}
                    </Typography>
                  ))}
                </Box>
              </Box>

              <Divider sx={{ my: 1.5, borderColor: 'rgba(59, 130, 246, 0.2)' }} />

              <Box>
                <Typography 
                  variant="h6"
                  sx={{
                    color: '#ffffff',
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    mb: 1
                  }}
                >
                  {language === 'pt' ? 'Tecnologias Utilizadas:' : 'Technologies Used:'}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                  {getTechIcons(key).map((tech, index) => (
                    <Chip
                      key={index}
                      icon={
                        tech.icon === 'totvs' ? (
                          <img 
                            src="/images/totvslogo.png" 
                            alt="Totvs" 
                            style={{ 
                              width: '16px', 
                              height: '16px',
                              objectFit: 'contain'
                            }} 
                          />
                        ) : (
                          <span style={{ fontSize: '0.9rem', color: tech.color }}>
                            {React.createElement(tech.icon)}
                          </span>
                        )
                      }
                      label={tech.name}
                      size="small"
                      sx={{
                        background: `linear-gradient(135deg, ${tech.color}20 0%, ${tech.color}10 100%)`,
                        color: '#ffffff',
                        border: `1px solid ${tech.color}40`,
                        fontWeight: '500',
                        fontSize: '0.75rem',
                        height: '26px',
                        '&:hover': {
                          background: `linear-gradient(135deg, ${tech.color}30 0%, ${tech.color}20 100%)`,
                          transform: 'scale(1.05)',
                          transition: 'all 0.2s ease'
                        }
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
    </motion.div>
  );
}

export default ExperiencePage;
