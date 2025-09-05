import React from 'react';
import { Typography, Box, Card, CardActionArea, Avatar } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';
import Breadcrumb from '../components/Breadcrumb';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaTiktok } from 'react-icons/fa';

function ContactPage() {
  const { language } = useLanguage();

  const content = {
    pt: {
      title: "Contato",
      description: "Entre em contato comigo através dos canais abaixo. Estou sempre aberto a novas oportunidades e conversas sobre tecnologia!",
      contacts: [
        {
          name: "Email",
          icon: FaEnvelope,
          color: "#EA4335",
          description: "kauemoraes.dev@gmail.com",
          url: "mailto:kauemoraes.dev@gmail.com"
        },
        {
          name: "LinkedIn",
          icon: FaLinkedin,
          color: "#0077B5",
          description: "kauê-moraes-a23b80173",
          url: "https://www.linkedin.com/in/kau%C3%AA-moraes-a23b80173/"
        },
        {
          name: "GitHub",
          icon: FaGithub,
          color: "#181717",
          description: "KaueSMoraes",
          url: "https://github.com/KaueSMoraes"
        },
        {
          name: "TikTok",
          icon: FaTiktok,
          color: "#000000",
          description: "@kauemoraes.dev",
          url: "https://www.tiktok.com/@kauemoraes.dev"
        }
      ]
    },
    en: {
      title: "Contact",
      description: "Get in touch with me through the channels below. I'm always open to new opportunities and conversations about technology!",
      contacts: [
        {
          name: "Email",
          icon: FaEnvelope,
          color: "#EA4335",
          description: "kauemoraes.dev@gmail.com",
          url: "mailto:kauemoraes.dev@gmail.com"
        },
        {
          name: "LinkedIn",
          icon: FaLinkedin,
          color: "#0077B5",
          description: "kauê-moraes-a23b80173",
          url: "https://www.linkedin.com/in/kau%C3%AA-moraes-a23b80173/"
        },
        {
          name: "GitHub",
          icon: FaGithub,
          color: "#181717",
          description: "KaueSMoraes",
          url: "https://github.com/KaueSMoraes"
        },
        {
          name: "TikTok",
          icon: FaTiktok,
          color: "#000000",
          description: "@kauemoraes.dev",
          url: "https://www.tiktok.com/@kauemoraes.dev"
        }
      ]
    }
  };

  const currentContent = content[language];

  const breadcrumbItems = [
    { label: language === 'pt' ? 'Início' : 'Home', path: '/' },
    { label: language === 'pt' ? 'Contato' : 'Contact' }
  ];

  const handleContactClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
          gap: 2 
        }}>
          {currentContent.contacts.map((contact, index) => (
            <Box key={index}>
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
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(59, 130, 246, 0.2)',
                    border: '1px solid rgba(59, 130, 246, 0.4)',
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
                    height: '3px',
                    background: `linear-gradient(90deg, ${contact.color}, #3b82f6)`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    borderRadius: '16px 16px 0 0'
                  }
                }}
              >
                <CardActionArea 
                  onClick={() => handleContactClick(contact.url)}
                  sx={{ 
                    height: '100%', 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 3,
                    textAlign: 'center'
                  }}
                >
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      mb: 2,
                      background: `linear-gradient(135deg, ${contact.color} 0%, ${contact.color}CC 100%)`,
                      fontSize: '2.5rem',
                      boxShadow: `0 8px 25px ${contact.color}40`,
                      color: '#ffffff'
                    }}
                  >
                    {React.createElement(contact.icon)}
                  </Avatar>
                  
                  <Typography 
                    variant="h5" 
                    component="h2"
                    sx={{
                      color: '#ffffff',
                      fontWeight: '700',
                      fontSize: '1.4rem',
                      mb: 1,
                      background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {contact.name}
                  </Typography>
                  
                  <Typography 
                    variant="body1"
                    sx={{
                      color: '#a1a1aa',
                      fontSize: '0.9rem',
                      lineHeight: 1.5,
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                      letterSpacing: '0.2px',
                      wordBreak: 'break-all'
                    }}
                  >
                    {contact.description}
                  </Typography>
                  
                  <Typography 
                    variant="body2"
                    sx={{
                      color: '#3b82f6',
                      fontSize: '0.8rem',
                      mt: 2,
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}
                  >
                    {language === 'pt' ? 'Clique para acessar' : 'Click to access'}
                  </Typography>
                </CardActionArea>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
    </motion.div>
  );
}

export default ContactPage;
