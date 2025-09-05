import { Paper, Typography, Card, CardContent, CardActionArea, Box, Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Breadcrumb from '../components/Breadcrumb';
import { FaCode, FaBriefcase, FaCogs, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

function HomePage() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const content = {
    pt: {
      title: "Sobre Mim",
      description: "Desenvolvedor Full-Stack com sólida experiência em desenvolvimento back-end (C#, .NET, ASP.NET Core) e front-end (React, Vue.js). Especialista em desenvolvimento mobile multiplataforma com Flutter e .NET MAUI, além de automação de processos e sistemas ERP/legados (TLPP/ADVPL).\nCom uma carreira focada em transformar desafios complexos em soluções tecnológicas eficientes, possuo expertise em bancos de dados SQL e NoSQL, microsserviços com Node.js (NestJS) e ferramentas de automação como n8n.\nComprometido com a entrega de código limpo, bem arquitetado e alinhado aos objetivos de negócio, buscando atuar como líder técnico e contribuir para a estratégia de inovação.",
      button: "English",
      cards: [
        { title: "Projetos", description: "Veja meus projetos", path: "/projects", icon: FaCode, color: "#3b82f6" },
        { title: "Experiência", description: "Minha jornada profissional", path: "/experience", icon: FaBriefcase, color: "#8b5cf6" },
        { title: "Habilidades", description: "Tecnologias que domino", path: "/skills", icon: FaCogs, color: "#06b6d4" },
        { title: "Contato", description: "Entre em contato", path: "/contact", icon: FaEnvelope, color: "#10b981" }
      ]
    },
    en: {
      title: "About Me",
      description: "Full-Stack Developer with solid experience in back-end development (C#, .NET, ASP.NET Core) and front-end (React, Vue.js). Specialist in cross-platform mobile development with Flutter and .NET MAUI, plus process automation and ERP/legacy systems (TLPP/ADVPL).\nWith a career focused on transforming complex challenges into efficient technological solutions, I have expertise in SQL and NoSQL databases, microservices with Node.js (NestJS) and automation tools like n8n.\nCommitted to delivering clean, well-architected code aligned with business objectives, seeking to act as a technical leader and contribute to innovation strategy.",
      button: "Português",
      cards: [
        { title: "Projects", description: "See my projects", path: "/projects", icon: FaCode, color: "#3b82f6" },
        { title: "Experience", description: "My professional journey", path: "/experience", icon: FaBriefcase, color: "#8b5cf6" },
        { title: "Skills", description: "Technologies I master", path: "/skills", icon: FaCogs, color: "#06b6d4" },
        { title: "Contact", description: "Get in touch", path: "/contact", icon: FaEnvelope, color: "#10b981" }
      ]
    }
  };

  const currentContent = content[language];

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  const breadcrumbItems = [
    { label: language === 'pt' ? 'Início' : 'Home' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Box sx={{ maxWidth: '100%', mx: 'auto', height: '120%', display: 'flex', flexDirection: 'column', gap: 1 }}>
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
              p: 3, 
              pb: 4,
              background: 'linear-gradient(145deg, rgba(30, 30, 60, 0.8) 0%, rgba(20, 20, 40, 0.9) 100%)',
              backdropFilter: 'blur(20px)',
              borderRadius: 2,
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.1)',
              position: 'relative',
              overflow: 'auto',
              flex: 1,
              maxHeight: 'calc(100vh - 200px)',
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-track': {
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '3px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                borderRadius: '3px',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
              },
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Typography 
                variant="h4" 
                component="h1" 
                gutterBottom 
                sx={{ 
                  color: '#ffffff',
                  mb: 1.5,
                  fontWeight: '700',
                  fontSize: '1.8rem',
                  background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
                  letterSpacing: '0.5px'
                }}
              >
                {currentContent.title}
              </Typography>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typography 
                variant="body2" 
                sx={{ 
                  lineHeight: 1.6, 
                  fontSize: '1rem',
                  color: '#e2e8f0',
                  textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                  letterSpacing: '0.3px',
                  whiteSpace: 'pre-line',
                  textAlign: 'justify',
                  mb: 2,
                  pb: 1
                }}
              >
                {currentContent.description}
              </Typography>
            </motion.div>
          </Paper>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Box 
            sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
              gap: { xs: 2, sm: 1 },
              flex: 1,
              mt: { xs: 3, sm: 0 },
              mb: { xs: 2, sm: 0 }
            }}
          >
            {currentContent.cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6 + (index * 0.1),
                  ease: "easeOut"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Card 
                  elevation={0}
                  sx={{ 
                    height: '100%',
                    background: 'linear-gradient(145deg, rgba(30, 30, 60, 0.6) 0%, rgba(20, 20, 40, 0.8) 100%)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: 2,
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
            <CardActionArea 
              onClick={() => handleCardClick(card.path)}
              sx={{ 
                height: '100%', 
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}
            >
              <CardContent sx={{ p: 0, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.div
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <Avatar
                    sx={{
                      width: 60,
                      height: 60,
                      mb: 2,
                      background: `linear-gradient(135deg, ${card.color} 0%, ${card.color}CC 100%)`,
                      fontSize: '1.8rem',
                      boxShadow: `0 8px 25px ${card.color}40`,
                      color: '#ffffff'
                    }}
                  >
                    <card.icon />
                  </Avatar>
                </motion.div>
                <Typography 
                  variant="h5" 
                  component="h2" 
                  gutterBottom
                  sx={{
                    color: '#ffffff',
                    fontWeight: '700',
                    fontSize: '1.1rem',
                    mb: 0.5,
                    background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                    letterSpacing: '0.5px',
                    textAlign: 'center'
                  }}
                >
                  {card.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{
                    color: '#a1a1aa',
                    fontSize: '0.85rem',
                    lineHeight: 1.4,
                    textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                    letterSpacing: '0.2px',
                    textAlign: 'center'
                  }}
                >
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </motion.div>
        ))}
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  );
}

export default HomePage;