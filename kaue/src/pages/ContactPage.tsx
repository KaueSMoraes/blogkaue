import { Typography, Box, Container } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTiktok, FaPaperPlane, FaArrowRight } from 'react-icons/fa';


function ContactPage() {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: "Contato",
      subtitle: "Vamos conversar",
      description: "Estou sempre aberto a novas oportunidades, projetos interessantes e conversas sobre tecnologia. Escolha seu canal preferido!",
      cta: "Ou envie um email diretamente",
      emailSubject: "Contato via Portfolio",
      contacts: [
        {
          name: "Email",
          icon: FaEnvelope,
          color: "#EA4335",
          description: "kauemoraes.dev@gmail.com",
          subtitle: "Melhor para conversas detalhadas",
          url: "mailto:kauemoraes.dev@gmail.com"
        },
        {
          name: "LinkedIn",
          icon: FaLinkedin,
          color: "#0077B5",
          description: "kauê-moraes",
          subtitle: "Networking profissional",
          url: "https://www.linkedin.com/in/kau%C3%AA-moraes-a23b80173/"
        },
        {
          name: "GitHub",
          icon: FaGithub,
          color: "#ffffff",
          description: "KaueSMoraes",
          subtitle: "Veja meus projetos",
          url: "https://github.com/KaueSMoraes"
        },
        {
          name: "TikTok",
          icon: FaTiktok,
          color: "#ff0050",
          description: "@kauemoraes.dev",
          subtitle: "Conteúdo sobre programação",
          url: "https://www.tiktok.com/@kauemoraes.dev"
        }
      ]
    },
    en: {
      title: "Contact",
      subtitle: "Let's talk",
      description: "I'm always open to new opportunities, interesting projects, and conversations about technology. Choose your preferred channel!",
      cta: "Or send an email directly",
      emailSubject: "Contact via Portfolio",
      contacts: [
        {
          name: "Email",
          icon: FaEnvelope,
          color: "#EA4335",
          description: "kauemoraes.dev@gmail.com",
          subtitle: "Best for detailed conversations",
          url: "mailto:kauemoraes.dev@gmail.com"
        },
        {
          name: "LinkedIn",
          icon: FaLinkedin,
          color: "#0077B5",
          description: "kauê-moraes",
          subtitle: "Professional networking",
          url: "https://www.linkedin.com/in/kau%C3%AA-moraes-a23b80173/"
        },
        {
          name: "GitHub",
          icon: FaGithub,
          color: "#ffffff",
          description: "KaueSMoraes",
          subtitle: "Check my projects",
          url: "https://github.com/KaueSMoraes"
        },
        {
          name: "TikTok",
          icon: FaTiktok,
          color: "#ff0050",
          description: "@kauemoraes.dev",
          subtitle: "Programming content",
          url: "https://www.tiktok.com/@kauemoraes.dev"
        }
      ]
    }
  };

  const currentContent = content[language];

  const handleContactClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box sx={{ minHeight: '100vh', pt: { xs: 10, md: 12 }, pb: 8, overflowX: 'hidden' }}>
      <Container maxWidth="lg" sx={{ width: '100%', maxWidth: { xs: '100%', sm: '100%', md: 'lg' } }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8, px: { xs: '1rem', sm: '1rem', md: 0 }, overflowX: 'hidden' }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
              }}
            >
              {currentContent.title}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '1.2rem', sm: '1.1rem', md: '1.3rem' },
                color: '#10b981',
                fontWeight: 500,
                mb: 2,
                px: { xs: 1, sm: 0 },
              }}
            >
              {currentContent.subtitle}
            </Typography>
            <Typography
              sx={{
                maxWidth: '600px',
                mx: 'auto',
                color: '#64748b',
                fontSize: { xs: '0.85rem', sm: '1rem' },
                lineHeight: 1.7,
                px: { xs: 2, sm: 0 },
              }}
            >
              {currentContent.description}
            </Typography>
          </Box>
        </motion.div>

        {/* Contact Cards Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' },
            gap: 3,
            mb: 10,
            px: { xs: '1rem', sm: 0 },
          }}
        >
          {currentContent.contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={contact.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onClick={() => handleContactClick(contact.url)}
                style={{ cursor: 'pointer' }}
              >
                <Box
                  sx={{
                    p: { xs: 2, md: 4 },
                    borderRadius: '24px',
                    background: 'rgba(15, 15, 25, 0.6)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      border: `1px solid ${contact.color}40`,
                      boxShadow: `0 25px 80px ${contact.color}15`,
                      '& .contact-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                        boxShadow: `0 20px 50px ${contact.color}40`,
                      },
                      '& .contact-glow': {
                        opacity: 0.6,
                      },
                      '& .contact-arrow': {
                        opacity: 1,
                        transform: 'translateX(5px)',
                      },
                    },
                  }}
                >
                  {/* Background glow */}
                  <Box
                    className="contact-glow"
                    sx={{
                      position: 'absolute',
                      top: '-100px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '200px',
                      height: '200px',
                      borderRadius: '50%',
                      background: `radial-gradient(circle, ${contact.color}30 0%, transparent 70%)`,
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                      pointerEvents: 'none',
                    }}
                  />

                  {/* Icon */}
                  <Box
                    className="contact-icon"
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `linear-gradient(135deg, ${contact.color}25 0%, ${contact.color}10 100%)`,
                      border: `1px solid ${contact.color}30`,
                      mb: 3,
                      transition: 'all 0.4s ease',
                    }}
                  >
                    <Icon size={32} color={contact.color} />
                  </Box>

                  {/* Name */}
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: '#ffffff',
                      fontSize: '1.3rem',
                      mb: 1,
                    }}
                  >
                    {contact.name}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      color: contact.color,
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      mb: 1,
                      wordBreak: 'break-all',
                    }}
                  >
                    {contact.description}
                  </Typography>

                  {/* Subtitle */}
                  <Typography
                    sx={{
                      color: '#64748b',
                      fontSize: '0.85rem',
                      mb: 2,
                    }}
                  >
                    {contact.subtitle}
                  </Typography>

                  {/* Arrow indicator */}
                  <Box
                    className="contact-arrow"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      color: contact.color,
                      opacity: 0.5,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 600 }}>
                      {language === 'pt' ? 'Acessar' : 'Access'}
                    </Typography>
                    <FaArrowRight size={12} />
                  </Box>
                </Box>
              </motion.div>
            );
          })}
        </Box>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              p: { xs: 2, md: 8 },
              borderRadius: '32px',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              mx: { xs: '1rem', sm: 0 },
            }}
          >
            {/* Background decoration */}
            <Box
              sx={{
                position: 'absolute',
                top: '-50%',
                right: '-10%',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: '-30%',
                left: '-5%',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
                    mx: 'auto',
                    mb: 4,
                    boxShadow: '0 20px 60px rgba(16, 185, 129, 0.3)',
                  }}
                >
                  <FaPaperPlane size={32} color="#ffffff" />
                </Box>
              </motion.div>

              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.4rem', md: '2.5rem' },
                  color: '#ffffff',
                  mb: 2,
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                }}
              >
                {currentContent.cta}
              </Typography>

              <Typography
                sx={{
                  color: '#94a3b8',
                  fontSize: { xs: '0.8rem', md: '1.1rem' },
                  mb: 4,
                  maxWidth: '500px',
                  mx: 'auto',
                  px: { xs: 1, md: 0 },
                }}
              >
                {language === 'pt'
                  ? 'Respondo todas as mensagens em até 24 horas.'
                  : 'I respond to all messages within 24 hours.'}
              </Typography>

              <motion.button
                onClick={() => handleContactClick('mailto:kauemoraes.dev@gmail.com')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1.2rem 2.5rem',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  background: 'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  boxShadow: '0 15px 50px rgba(16, 185, 129, 0.3)',
                }}
              >
                <FaEnvelope size={20} />
                {language === 'pt' ? 'Enviar Email' : 'Send Email'}
              </motion.button>
            </Box>
          </Box>
        </motion.div>

        {/* Location info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', mt: { xs: 4, md: 2 } }}>
            <Typography sx={{ color: '#64748b', fontSize: '0.95rem' }}>
              📍 {language === 'pt' ? 'Baseado no Brasil, trabalhando remotamente para o mundo' : 'Based in Brazil, working remotely for the world'}
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default ContactPage;
