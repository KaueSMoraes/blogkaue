import { Box, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { FaHome, FaCode, FaBriefcase, FaCogs, FaEnvelope } from 'react-icons/fa';

function Navbar() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', label: { pt: 'Início', en: 'Home' }, icon: FaHome },
    { path: '/projects', label: { pt: 'Projetos', en: 'Projects' }, icon: FaCode },
    { path: '/experience', label: { pt: 'Experiência', en: 'Experience' }, icon: FaBriefcase },
    { path: '/skills', label: { pt: 'Habilidades', en: 'Skills' }, icon: FaCogs },
    { path: '/contact', label: { pt: 'Contato', en: 'Contact' }, icon: FaEnvelope },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '1rem',
        left: '65%', 
        transform: 'translateX(-50%)',
        zIndex: 100,
        width: 'auto',
        maxWidth: '95vw',
      }}
    >
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Box
          sx={{
            display: 'flex',  
            alignItems: 'center',
            gap: { xs: 0.8, sm: 1 },
            py: { xs: 1, sm: 0.8 },
            background: 'rgba(15, 15, 25, 0.85)', 
            backdropFilter: 'blur(20px)',
            borderRadius: '50px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.4)',
          }}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <Box
                key={item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  position: 'relative',
                  cursor: 'pointer',
                  borderRadius: '25px',
                }}
              >
                {active && (
                  <motion.div
                    layoutId="activeBackground"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      borderRadius: '25px',
                      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
                      zIndex: 0,
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  sx={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    px: { xs: 2, sm: 2 },
                    py: { xs: 1.2, sm: 1 },
                  }}
                >
                  <Icon
                    style={{
                      fontSize: '1.0rem',
                      color: active ? '#60a5fa' : '#94a3b8', 
                      transition: 'color 0.3s ease',
                    }}
                  />
                  <Typography
                    sx={{
                      display: { xs: 'none', md: 'block' },
                      fontSize: '0.85rem',
                      fontWeight: 500, 
                      color: active ? '#ffffff' : '#94a3b8',
                      transition: 'color 0.3s ease',
                      whiteSpace: 'nowrap',
                      textShadow: active ? '0 0 0.5px #ffffff' : 'none', 
                    }}
                  >
                    {item.label[language]}
                  </Typography>
                </Box>

                {/* Indicador inferior (Barra) */}
                {active && (
                  <motion.div
                    layoutId="activeIndicator"
                    style={{
                      position: 'absolute',
                      bottom: '4px', 
                      left: 0,
                      right: 0,
                      margin: '0 auto', 
                      width: '20px',
                      height: '3px',
                      borderRadius: '2px',
                      background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                      zIndex: 2,
                    }}
                  />
                )}
              </Box>
            );
          })}
        </Box>
      </motion.nav>
    </Box>
  );
}

export default Navbar;