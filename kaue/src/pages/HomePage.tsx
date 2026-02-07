import { Box, Typography, Container, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { FaCode, FaBriefcase, FaCogs, FaEnvelope, FaGithub, FaLinkedin, FaTiktok, FaChevronDown } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

function HomePage() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const content = {
    pt: {
      greeting: "Olá, eu sou",
      name: "Kauê Moraes",
      role: "Desenvolvedor Full-Stack",
      description: "Transformando ideias complexas em soluções tecnológicas elegantes. Especialista em .NET, React e arquiteturas escaláveis.",
      cta: "Conheça meu trabalho",
      aboutTitle: "Sobre Mim",
      aboutText: "Desenvolvedor Full-Stack com sólida experiência em desenvolvimento back-end (C#, .NET, ASP.NET Core) e front-end (React, Vue.js). Especialista em desenvolvimento mobile multiplataforma com Flutter e .NET MAUI, além de automação de processos e sistemas ERP/legados (TLPP/ADVPL).\n\nCom uma carreira focada em transformar desafios complexos em soluções tecnológicas eficientes, possuo expertise em bancos de dados SQL e NoSQL, microsserviços com Node.js (NestJS) e ferramentas de automação como n8n.\n\nComprometido com a entrega de código limpo, bem arquitetado e alinhado aos objetivos de negócio.",
      cards: [
        { title: "Projetos", description: "Bibliotecas open-source e APIs", path: "/projects", icon: FaCode, color: "#3b82f6" },
        { title: "Experiência", description: "Minha jornada profissional", path: "/experience", icon: FaBriefcase, color: "#8b5cf6" },
        { title: "Habilidades", description: "Stack técnico completo", path: "/skills", icon: FaCogs, color: "#06b6d4" },
        { title: "Contato", description: "Vamos conversar", path: "/contact", icon: FaEnvelope, color: "#10b981" }
      ],
      exploreMore: "Explore mais"
    },
    en: {
      greeting: "Hi, I'm",
      name: "Kauê Moraes",
      role: "Full-Stack Developer",
      description: "Transforming complex ideas into elegant tech solutions. Specialist in .NET, React, and scalable architectures.",
      cta: "Explore my work",
      aboutTitle: "About Me",
      aboutText: "Full-Stack Developer with solid experience in back-end development (C#, .NET, ASP.NET Core) and front-end (React, Vue.js). Specialist in cross-platform mobile development with Flutter and .NET MAUI, plus process automation and ERP/legacy systems (TLPP/ADVPL).\n\nWith a career focused on transforming complex challenges into efficient technological solutions, I have expertise in SQL and NoSQL databases, microservices with Node.js (NestJS) and automation tools like n8n.\n\nCommitted to delivering clean, well-architected code aligned with business objectives.",
      cards: [
        { title: "Projects", description: "Open-source libraries and APIs", path: "/projects", icon: FaCode, color: "#3b82f6" },
        { title: "Experience", description: "My professional journey", path: "/experience", icon: FaBriefcase, color: "#8b5cf6" },
        { title: "Skills", description: "Complete tech stack", path: "/skills", icon: FaCogs, color: "#06b6d4" },
        { title: "Contact", description: "Let's talk", path: "/contact", icon: FaEnvelope, color: "#10b981" }
      ],
      exploreMore: "Explore more"
    }
  };

  const currentContent = content[language];

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/KaueSMoraes", label: "GitHub" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/kau%C3%AA-moraes-a23b80173/", label: "LinkedIn" },
    { icon: FaTiktok, url: "https://www.tiktok.com/@kauemoraes.dev", label: "TikTok" },
  ];

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <Box ref={containerRef} sx={{ width: '100%' }}>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          px: 3,
        }}
      >
        <motion.div style={{ y, opacity }}>
          {/* Avatar with glow effect */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '2rem',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-5px',
                  left: '-5px',
                  right: '-5px',
                  bottom: '-5px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)',
                  backgroundSize: '300% 300%',
                  animation: 'gradient-shift 4s ease infinite',
                  zIndex: 0,
                },
              }}
            >
              <motion.img
                src="https://avatars.githubusercontent.com/u/126820310?s=400&u=f783a115f514da69261c663b4b6014152a43d3b0&v=4"
                alt="Kauê Moraes"
                style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  position: 'relative',
                  zIndex: 1,
                  border: '4px solid #0a0a0f',
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </Box>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                color: '#94a3b8',
                fontSize: { xs: '1rem', sm: '1.2rem' },
                fontWeight: 500,
                mb: 1,
              }}
            >
              {currentContent.greeting}
            </Typography>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Typography
              variant="h1"
              sx={{
                textAlign: 'center',
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontWeight: 800,
                background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #3b82f6 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1,
                letterSpacing: '-0.02em',
              }}
            >
              {currentContent.name}
            </Typography>
          </motion.div>

          {/* Role with typing effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
                fontWeight: 600,
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 3,
              }}
            >
              {currentContent.role}
            </Typography>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                maxWidth: '600px',
                mx: 'auto',
                color: '#94a3b8',
                fontSize: { xs: '1rem', sm: '1.1rem' },
                lineHeight: 1.7,
                mb: 4,
              }}
            >
              {currentContent.description}
            </Typography>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            {socialLinks.map((social) => (
              <motion.div
                key={social.label}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconButton
                  onClick={() => window.open(social.url, '_blank')}
                  sx={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: '#94a3b8',
                    width: 50,
                    height: 50,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2))',
                      borderColor: '#3b82f6',
                      color: '#ffffff',
                    },
                  }}
                >
                  <social.icon size={22} />
                </IconButton>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <motion.button
              onClick={() => navigate('/projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '1rem 2.5rem',
                fontSize: '1rem',
                fontWeight: 600,
                color: '#ffffff',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                border: 'none',
                borderRadius: '50px',
                cursor: 'pointer',
                boxShadow: '0 10px 40px rgba(59, 130, 246, 0.3)',
                transition: 'all 0.3s ease',
              }}
            >
              {currentContent.cta}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToContent}
            style={{ cursor: 'pointer' }}
          >
            <FaChevronDown color="#64748b" size={24} />
          </motion.div>
        </motion.div>
      </Box>

      {/* About Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              fontWeight: 700,
              mb: 4,
              background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {currentContent.aboutTitle}
          </Typography>

          <Typography
            sx={{
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto',
              color: '#94a3b8',
              fontSize: { xs: '1rem', sm: '1.1rem' },
              lineHeight: 1.8,
              whiteSpace: 'pre-line',
            }}
          >
            {currentContent.aboutText}
          </Typography>
        </motion.div>
      </Container>

      {/* Cards Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
              fontSize: { xs: '1.8rem', sm: '2.2rem' },
              fontWeight: 700,
              mb: 6,
              color: '#ffffff',
            }}
          >
            {currentContent.exploreMore}
          </Typography>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' },
            gap: 3,
          }}
        >
          {currentContent.cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.path}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => navigate(card.path)}
                style={{ cursor: 'pointer' }}
              >
                <Box
                  sx={{
                    p: 4,
                    borderRadius: '24px',
                    background: 'rgba(15, 15, 25, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    transition: 'all 0.4s ease',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      border: `1px solid ${card.color}40`,
                      boxShadow: `0 20px 60px ${card.color}20`,
                      '& .card-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                        boxShadow: `0 15px 40px ${card.color}40`,
                      },
                      '& .card-glow': {
                        opacity: 0.5,
                      },
                    },
                  }}
                >
                  {/* Background glow */}
                  <Box
                    className="card-glow"
                    sx={{
                      position: 'absolute',
                      top: '-50%',
                      left: '-50%',
                      width: '200%',
                      height: '200%',
                      background: `radial-gradient(circle, ${card.color}15 0%, transparent 60%)`,
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Icon */}
                  <Box
                    className="card-icon"
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `linear-gradient(135deg, ${card.color}30 0%, ${card.color}10 100%)`,
                      border: `1px solid ${card.color}30`,
                      mb: 3,
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <Icon size={28} color={card.color} />
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: '#ffffff',
                      mb: 1,
                      fontSize: '1.2rem',
                    }}
                  >
                    {card.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      color: '#64748b',
                      fontSize: '0.95rem',
                      lineHeight: 1.5,
                    }}
                  >
                    {card.description}
                  </Typography>
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 4,
          textAlign: 'center',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        }}
      >
        <Typography sx={{ color: '#64748b', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Kauê Moraes. {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
        </Typography>
      </Box>
    </Box>
  );
}

export default HomePage;
