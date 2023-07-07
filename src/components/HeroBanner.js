import React from 'react';
import { Box, Button, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';
const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
      position='relative'
      p='20px'
    >
      <Typography
        color='#FF2625'
        fontWeight='600'
        fontSize='26px'
        mb='23px'
        mt='30px'
      >
        Fitness Club
      </Typography>

      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}
        mb={4}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize='22px' lineHeight='35px' mb={2}>
        Check out the most effective exercises
      </Typography>

      <Button
        variant='contained'
        color='error'
        sx={{ background: '#FF2625', px: '15px', py: '10px' }}
        href='#exercises'
      >
        Explore Exercises
      </Button>

      <Typography
        fontSize='200px'
        fontWeight='600'
        color='#FF2625'
        sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  );
};

export default HeroBanner;
