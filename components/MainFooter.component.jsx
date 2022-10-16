import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import Image from 'next/image'
import TikeraLogoPic from '../public/owner/tikera_footer.png'


export default function MainFooter() {
  return (
    <Box sx={{paddingLeft:{md: 25, xs: 5},paddingRight:{md: 25, xs: 5}, bgcolor: '#000D7E'}} py={5}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
        <Box component="div" sx={{width: '100%',display: 'flex',flexDirection: 'column', alignItems: 'flex-start' }}>
          <Image
            src={TikeraLogoPic}
            alt="Tikera"
            width="100px"
            height="30px"
            layout='fixed'
          />
          <Box component="div" mx={0} my={0.5}>
            <FacebookIcon sx={{color: 'white'}} />
            <InstagramIcon sx={{color: 'white'}} />
          </Box>
          <Box component="div" mx={0}>
            <Typography align='left' sx={{fontSize: '14px', color: 'white'}}>
              Phone Number: +84 (085) 5494978
            </Typography>
            <Typography align='left' sx={{fontSize: '14px', color: 'white'}}>
              Email: tikera.platform@gmial.com
            </Typography>
          </Box>
        </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box component="div" sx={{  width: '100%', borderTop: '2px solid white'}}>
            <Typography align='right' sx={{fontSize: '14px', color: 'white'}}>
              About Tikera
            </Typography>
            <Divider />
            <Typography align='right' sx={{fontSize: '14px', color: 'white'}}>
              Support
            </Typography>
            <Divider />
            <Typography align='right'sx={{fontSize: '14px', color: 'white'}}>
              Blog
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box component="div" sx={{ display: 'flex', justifyContent: 'center', width: '100%', flexDirection:{md: 'row',  xs: 'column'}, borderTop: '2px solid white'}}>
            <Typography align='center' sx={{fontSize: '14px', color: 'white'}}  mx={3} my={0.5}>
              Terms of service
            </Typography>
            <Divider orientation='vertical'/>
            <Typography align='center' sx={{fontSize: '14px', color: 'white'}}  mx={3} my={0.5}>
              Quy định bảo mật
            </Typography>
            <Divider orientation='vertical'/>
            <Typography align='center' sx={{fontSize: '14px', color: 'white'}} mx={3} my={0.5}>
              Quy chế hoạt động sàn giao dịch thương mại điện tử Tikera
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} sx={{borderTop: '2px solid white'}}>
          <Typography align='center' sx={{fontSize: '14px', color: 'white'}}  mx={3} my={1}>
            Copyright © 2022 Tikera Co.,Ltd. All Rights Reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
