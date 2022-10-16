import MainNavigation from '../components/MainNavigation.component'
import * as React from 'react';
import {Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Radio, RadioGroup} from '@mui/material';

import Image from 'next/image'
import Logo1 from '../public/logo/1.jpeg';
import Logo2 from '../public/logo/2.jpeg';
import Logo3 from '../public/logo/3.jpeg';
import Logo4 from '../public/logo/4.jpeg';
import Logo5 from '../public/logo/5.jpeg';
import Logo6 from '../public/logo/6.jpeg';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';


function EditPage({request}) {
  const router = useRouter()
  return (
    <>
      <MainNavigation />
      {/* <Image src={Logo1} width={"750px"} height={"350px"} /> */}
    <Grid container spacing={2} mt={10}>
        <Grid item xs={2}>
          <Box sx={{padding: '20px',display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center', bgcolor:'white', boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
            <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Font</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="fonta"
              name="radio-buttons-group"
            >
              <FormControlLabel value="fonta" control={<Radio />} label="Font A"/>
              <FormControlLabel value="fontb" control={<Radio />} label="Font B"/>
            </RadioGroup>
            <FormLabel id="color-radio">Color</FormLabel>
            <RadioGroup
              aria-labelledby="color-radio"
              defaultValue="red"
              name="radio-buttons-group"
            >
              <FormControlLabel value="red" control={<Radio />} label="Red"/>
              <FormControlLabel value="brown" control={<Radio />} label="Brown" />
              <FormControlLabel value="green" control={<Radio />} label="Green" />
            </RadioGroup>
            <Button
              variant="contained"
              
            >
              Export
            </Button>
          </FormControl>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Image src={Logo1} width={"750px"} height={"400px"} />
        </Grid>
      </Grid>
      <Button variant='primary' onClick={() => router.push({
        pathname: `/suggest/${request.id}`
      })}>Next</Button>
    </>
  )
}

export default EditPage