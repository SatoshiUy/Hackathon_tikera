import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';

import SearchBar from '../components/SearchBar'

import Image from 'next/image'
import TikeraHeroPic from '../public/landing_page/hero.png'

const Hero = () => {

  return (
    <Box sx={{width: "100%"}} my={20}> 
      <Grid container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
      >
        <Grid item xs={12} md={7}>
          <Typography sx={{fontSize:'45px', color: '#002CB0'}}>
            Hãy cùng chúng tôi sáng tạo nên thương hiệu của bạn
          </Typography>
          <Typography sx={{fontSize:'20px'}} >
            <b>Tikera</b> sẽ giúp cho bạn lan tỏa thương hiệu của chính bản thân đến với mọi người bằng những sản phẩm mang phong cách của chính bản thân bạn
          </Typography>
          <Typography sx={{fontSize:'20px', color: '#FFBD00'}}>
            Còn chần chờ gì nữa!
          </Typography>
          <SearchBar />
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
						className='flex'
						>
							<Image
								src={TikeraHeroPic}
								alt="Tikera Hero Landing Page"
                width="400px"
                height="400px"
							/>
					</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;