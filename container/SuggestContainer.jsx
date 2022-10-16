
import { Grid, Typography, Button, Box, Card, CardMedia, CardActionArea, CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';

import SearchBar from '../components/SearchBar'

import Image from 'next/image'
import processing3 from '../public/designer/processing3.png'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DesignerSuggestCard from '../components/DesignerSuggestCard';

import * as React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import QR from '../public/2.jpg'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SuggestContainer() {
  const [designers, setDesigners] = useState('')
  const [requirement, setRequirement] = useState('')
  const router = useRouter();
  const {id} = router.query;
  var token = "";
  setTimeout(async () => token = await fetch('https://s9mp3zvtqa.execute-api.ap-southeast-1.amazonaws.com/Prod/signin?email=quangchieens22@gmail.com&password=@Chien2346'), 1000); 
  const myLoader = ({ src, token }) => {
    return `${src}?token=${token}`;
  }
  console.log(designers)
  
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetch(`https://3e6wxzs2h9.execute-api.ap-southeast-1.amazonaws.com/Prod/Designers?id=${id}`)
      .then((res) => res.json())
      .then((data) => setDesigners(data))

    fetch(`https://w7kp3tssu4.execute-api.ap-southeast-1.amazonaws.com/Prod/request/${id}`)
      .then((res) => res.json())
      .then((data) => setRequirement(data)) 

    
  }, [])
  console.log("requirement", requirement)

  return (
    <Box sx={{width: "100%"}} my={20}> 
      <Grid container
          direction="row"
          alignItems="flex-start"
          justifyContent="center"
          spacing={10}
          sx={{padding: '0 10px'}}
      >
        {/* boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px;' */}
        <Grid item xs={12} md={8} sx={{display:'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column', gap: '30px', bgcolor: 'white', boxShadow:'rgba(149, 157, 165, 0.2) 0px 8px 24px;'}} py={10}>
          <Typography sx={{fontSize:'30px', color: '#0007AB'}} align="left">
            Here are a few suggestions that may meet your requirements
          </Typography>
          {!designers || designers.map(designer => (
            <Box sx={{display: 'flex', gap:'20px', alignItem: 'flex-start', justifyContent: 'space-around'}}>
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia title="Your title">
                    {/* <div style={{ position: 'relative', width: '100%', height: '100%' }}> */}
                      <Image src={designer.profilePicture} width="300px"  height="300px"/>
                    {/* </div> */}
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {designer.name.first + " " + designer.name.last}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Phone: {designer.phoneNumber}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Age: {designer.age}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Email: {designer.email}
                    </Typography>
          
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary"
                    onClick={handleClickOpen}
                  >
                    Contact
                  </Button>
                </CardActions>
              </Card>
              <Box sx={{display:'flex', flexDirection:'column', alignItem:'flex-start', justifyContent:'space-between'}}>
                <Typography sx={{fontSize: "20px"}}>
                  Best work
                </Typography>
                <Image src={designer.bestWork[0]} width="250px"  height="250px"/>
                <Image src={designer.bestWork[1]} width="250px"  height="250px"/>
              </Box>
            </Box>
          ))}
          
        </Grid>
        <Grid item xs={12} md={4}>
        <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Your Requirement
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Category: {requirement.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description: {requirement.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Type: {requirement.type}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Style: {requirement.style }
                </Typography>
              </CardContent>
              <CardMedia title="Your title">
                <Image src={processing3} width="300px" height="300px"/>
              </CardMedia>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Edit (Staging)
              </Button>
            </CardActions>
            
          </Card>
          <Button sx={{margin: '20px 0'}} variant='contained' onClick={
          () => router.push({
            pathname: '/edit'
          })
        }>Sản phẩm gợi ý</Button>
        </Grid>
      </Grid>
      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Thanh toán"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            
            Hãy thanh toán để liên hệ với designer với giá:
            <Typography sx={{color: 'rgb(0, 115, 46)', fontSize: '25px'}}>
            10.000 VND
            </Typography>
          </DialogContentText>
        </DialogContent>
        <Image src={QR} width={"500px"} height={"500px"} sx={{margin: '10px 0'}}/>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={() => router.push({
                      pathname:'https://poc-chat-app-pi.vercel.app/'
                    })}>Agree</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export async function getServerSideProps(context) {
  const id = context.params.id


  return {
    props: {
      designers,
    },
  }
}