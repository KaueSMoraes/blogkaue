import { IconButton, Tooltip } from '@mui/material';
import { useLanguage } from '../contexts/LanguageContext';

function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const handleToggle = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <Tooltip title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}>
      <IconButton 
        onClick={handleToggle}
        sx={{ 
          color: 'white',
          background: 'linear-gradient(145deg, rgba(30, 30, 60, 0.8) 0%, rgba(20, 20, 40, 0.9) 100%)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 0,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 20px rgba(59, 130, 246, 0.1)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            transform: 'scale(1.1)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(59, 130, 246, 0.3)',
            border: '1px solid rgba(59, 130, 246, 0.3)'
          }
        }}
      >
        {language === 'pt' ? (
          <span className="fi fi-us"></span>
        ) : (
          <span className="fi fi-br"></span>
        )}
      </IconButton>
    </Tooltip>
  );
}

export default LanguageToggle;
