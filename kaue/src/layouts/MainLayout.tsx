import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Avatar from '../components/Avatar';
import LanguageToggle from '../components/LanguageToggle';

const layoutStyle = {
  height: '100vh', 
  width: '100vw',
  background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 75%, #000000 100%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '0.5rem',
  paddingTop: '1rem',
  position: 'relative',
  overflow: 'hidden',
  boxSizing: 'border-box'
};
const contentStyle = {
    background: 'linear-gradient(145deg, rgba(30, 30, 60, 0.9) 0%, rgba(20, 20, 40, 0.95) 100%)',
    padding: '0',
    borderRadius: '16px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(59, 130, 246, 0.1)',
    width: '100%',
    maxWidth: '1200px',
    height: 'calc(103vh - 16rem)',
    backdropFilter: 'blur(20px)',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxSizing: 'border-box'
};

function MainLayout() {
  return (
    <div style={layoutStyle as React.CSSProperties}>
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f0f23 75%, #000000 100%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
          `,
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          zIndex: 1000
        }}
      >
        <LanguageToggle />
      </Box>
      
      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <Avatar 
          imageUrl="https://avatars.githubusercontent.com/u/126820310?s=400&u=f783a115f514da69261c663b4b6014152a43d3b0&v=4" 
          name="Kauê Moraes - FullStack Developer" 
        />
        <main style={contentStyle as React.CSSProperties}>
          <Box
            sx={{
              height: '100%',
              overflowY: 'auto',
              overflowX: 'hidden',
              padding: '1rem',
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
                '&:hover': {
                  background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                }
              }
            }}
          >
            <Outlet />
          </Box>
        </main>
      </Box>
    </div>
  );
}

export default MainLayout;
