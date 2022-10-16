
import { Grid, Typography, Button, Box, Card, CardMedia, CardActionArea, CardActions } from '@mui/material';
import CardContent from '@mui/material/CardContent';

import SearchBar from '../components/SearchBar'

import Image from 'next/image'
import processing3 from '../public/designer/processing3.png'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import DesignerSuggestCard from '../components/DesignerSuggestCard';

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
                  <Button size="small" color="primary">
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
        </Grid>
      </Grid>
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