import { Box } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import '/node_modules/flag-icons/css/flag-icons.min.css';

function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: { xs: 0.3, sm: 0.5 },
          p: { xs: 0.4, sm: 0.5 },
          borderRadius: '50px',
          background: 'rgba(15, 15, 25, 0.9)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        }}
      >
        {/* Portuguese */}
        <Box
          component={motion.button}
          onClick={() => setLanguage('pt')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          sx={{
            width: { xs: 32, sm: 36 },
            height: { xs: 32, sm: 36 },
            borderRadius: '50%',
            border: 'none',
            background: language === 'pt'
              ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
              : 'transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            transition: 'background 0.3s ease',
            boxShadow: language === 'pt'
              ? '0 4px 15px rgba(59, 130, 246, 0.4)'
              : 'none',
          }}
        >
          <span
            className="fi fi-br"
            style={{
              fontSize: '1.1rem',
              borderRadius: '50%',
              opacity: language === 'pt' ? 1 : 0.5,
              transition: 'opacity 0.3s ease',
            }}
          />
        </Box>

        {/* English */}
        <Box
          component={motion.button}
          onClick={() => setLanguage('en')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          sx={{
            width: { xs: 32, sm: 36 },
            height: { xs: 32, sm: 36 },
            borderRadius: '50%',
            border: 'none',
            background: language === 'en'
              ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
              : 'transparent',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
            transition: 'background 0.3s ease',
            boxShadow: language === 'en'
              ? '0 4px 15px rgba(59, 130, 246, 0.4)'
              : 'none',
          }}
        >
          <span
            className="fi fi-us"
            style={{
              fontSize: '1.1rem',
              borderRadius: '50%',
              opacity: language === 'en' ? 1 : 0.5,
              transition: 'opacity 0.3s ease',
            }}
          />
        </Box>
      </Box>
    </motion.div>
  );
}

export default LanguageToggle;
