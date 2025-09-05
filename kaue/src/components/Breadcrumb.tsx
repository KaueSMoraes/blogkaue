import { Box, Typography, Breadcrumbs as MuiBreadcrumbs, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

function Breadcrumb({ items }: BreadcrumbProps) {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };


  return (
    <Box sx={{ mb: 1 }}>
      <MuiBreadcrumbs
        separator="›"
        sx={{
          '& .MuiBreadcrumbs-separator': {
            color: '#a1a1aa',
            fontSize: '0.9rem',
            fontWeight: '600'
          }
        }}
      >
        {items.map((item, index) => (
          <Box key={index}>
            {item.path ? (
              <Button
                onClick={() => handleNavigate(item.path!)}
                sx={{
                  color: index === items.length - 1 ? '#ffffff' : '#a1a1aa',
                  fontSize: '0.9rem',
                  fontWeight: index === items.length - 1 ? '700' : '500',
                  textTransform: 'none',
                  p: 0,
                  minWidth: 'auto',
                  background: index === items.length - 1 
                    ? 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)'
                    : 'none',
                  backgroundClip: index === items.length - 1 ? 'text' : 'none',
                  WebkitBackgroundClip: index === items.length - 1 ? 'text' : 'none',
                  WebkitTextFillColor: index === items.length - 1 ? 'transparent' : 'inherit',
                  textShadow: index === items.length - 1 ? '0 0 20px rgba(59, 130, 246, 0.3)' : 'none',
                  letterSpacing: '0.3px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: '#ffffff',
                    textShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
                    transform: 'scale(1.05)'
                  }
                }}
              >
                {item.label}
              </Button>
            ) : (
              <Typography
                sx={{
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
                  letterSpacing: '0.3px'
                }}
              >
                {item.label}
              </Typography>
            )}
          </Box>
        ))}
      </MuiBreadcrumbs>
    </Box>
  );
}

export default Breadcrumb;
