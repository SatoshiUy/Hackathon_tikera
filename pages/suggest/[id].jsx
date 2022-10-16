import React from 'react'
import MainNavigation from '../../components/MainNavigation.component'
import MainFooter from '../../components/MainFooter.component'
import SuggestContainer from '../../container/SuggestContainer'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Image from 'next/image'
import QR from '../../public/qr.png'
import { Button } from '@mui/material';



function SuggestPage() {
  
  return (
    <>
      <MainNavigation />
      <SuggestContainer />
      
      <MainFooter />
    </>
  )
}

export default SuggestPage