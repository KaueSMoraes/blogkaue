import React from 'react';
import { motion } from 'framer-motion';
import { Typography } from '@mui/material';

const avatarStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '1rem',
  position: 'relative'
};

const imageStyle = {
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  objectFit: 'cover',
  border: '3px solid transparent',
  background: 'linear-gradient(145deg, #3b82f6, #8b5cf6, #06b6d4)',
  backgroundClip: 'padding-box',
  boxShadow: '0 8px 25px rgba(59, 130, 246, 0.3), 0 0 15px rgba(139, 92, 246, 0.2)',
  marginBottom: '0.8rem',
  position: 'relative',
  zIndex: 2
};


interface AvatarProps {
  imageUrl: string;
  name: string;
}

function Avatar({ imageUrl, name }: AvatarProps) {
  return (
    <motion.div 
      style={avatarStyle as React.CSSProperties}
      initial={{ opacity: 0, y: -30, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.2
      }}
    >
      <motion.img 
        src={imageUrl} 
        alt={name}
        style={imageStyle as React.CSSProperties}
        whileHover={{ 
          scale: 1.05, 
          rotate: 5,
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.95 }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 0.5,
          ease: "easeOut"
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            color: '#ffffff',
            fontSize: { xs: '1.4rem', sm: '1.6rem' },
            fontWeight: '700',
            textShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 2px 10px rgba(0, 0, 0, 0.8)',
            margin: 0,
            background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.5px',
            textAlign: { xs: 'center', sm: 'left' }
          }}
        >
          {name}
        </Typography>
      </motion.div>
    </motion.div>
  );
}

export default Avatar;
