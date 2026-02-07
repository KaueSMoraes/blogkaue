import { Typography, Box, Container } from '@mui/material';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

function PageHeader({ title, subtitle, description }: PageHeaderProps) {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Container maxWidth="lg" disableGutters sx={{ width: '100%', maxWidth: { xs: '100%', sm: '100%', md: 'lg' } }}> 
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box 
            sx={{ 
              textAlign: 'center', 
              mb: 8, 
              px: { xs: '1rem', sm: '1rem', md: 2 }, 
              width: '100%',
              boxSizing: 'border-box',
              overflowX: 'hidden',
              maxWidth: '100%'
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '1.25rem', sm: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                background: 'linear-gradient(135deg, #ffffff 0%, #94a3b8 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
                wordBreak: 'break-word', 
                overflowWrap: 'break-word',
                lineHeight: 1.3,
                hyphens: 'auto',
              }}
            >
              {title}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.8rem', sm: '1.1rem', md: '1.3rem' },
                color: '#8b5cf6',
                fontWeight: 500,
                mb: 2,
                px: { xs: 2, sm: 0 },
                letterSpacing: '0.5px',
              }}
            >
              {subtitle}
            </Typography>
            <Typography
              sx={{
                maxWidth: '700px',
                mx: 'auto',
                color: '#64748b',
                fontSize: { xs: '0.75rem', sm: '1rem' },
                lineHeight: 1.6,
                px: { xs: 2, sm: 0 },
              }}
            >
              {description}
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default PageHeader;