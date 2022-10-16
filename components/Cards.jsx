import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import CardComponent from '../components/CardComponent'

import Image from 'next/image'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function Cards() {
  return (
    <Box sx={{width: "100%", bgColor: 'transparent', display: 'flex', justifyContent:'space-around', alignItem:'center', flexDirection: 'column'}} my={20}>
      <Typography sx={{fontSize:'45px', color: '#002CB0', display:'flex', justifyContent:'space-around', alignItems:'center'}} my={4}>
        Sự tiện lợi đến từ TIKERA!
      </Typography>
      <Box sx={{display:'flex', justifyContent:'space-around', alignItems:'center', flexFlow:'row wrap'}} mb={5}>
        <CardComponent cardIndex={0}/>
        <CardComponent cardIndex={1}/>
        <CardComponent cardIndex={2}/>
      </Box>
    </Box>
  )
}
