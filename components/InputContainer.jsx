import { Button, Container, TextField, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

function InputContainer({name}) {
  const router = useRouter();
  console.log( router.query);
  
  return (
    <Container sx={{height:'80vh', width: '60vw', marginTop:'75px', display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: 'column'}}>
      <Typography sx={{fontSize:'40px'}}>Enter {name}</Typography>
      <Typography sx={{fontSize:'25px'}} my={5}>By telling us more about what you do, we can create better designs for you.</Typography>
      <TextField
          id="outlined-textarea"
          label={name}
          placeholder={name}
          multiline
          fullWidth 
        />
    </Container>
  )
}

export default InputContainer