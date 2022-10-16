import React from 'react'

import {Button, CardMedia, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup} from '@mui/material'
import Image from 'next/image'
import Pic111 from '../public/logo/111.jpeg'
import Pic121 from '../public/logo/121.jpeg'
import Pic112 from '../public/logo/112.jpeg'
import Pic122 from '../public/logo/122.jpeg'
import { useRouter } from 'next/router'

function EditPage() {
  const router = useRouter();

  const [visible, setVisible] = React.useState();

  const [valueA, setValueA] = React.useState('green');

  const handleChangeA = (event) => {
    setValueA(event.target.value);
  };

  const [valueB, setValueB] = React.useState('fonta');

  const handleChangeB = (event) => {
    setValueB(event.target.value);
  };

  return (
    <>
      <Grid container spacing={2}
        justifyContent="center"
        alignItems="center"
        mt={15}
      >
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Font</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={valueA}
            onChange={handleChangeA}
          >
            <FormControlLabel value="green" control={<Radio />} label="Font A" />
            <FormControlLabel value="yellow" control={<Radio />} label="Font B" />
          </RadioGroup>

          <FormLabel id="demo-controlled-radio-buttons-group">Color</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={valueB}
            onChange={handleChangeB}
          >
            <FormControlLabel value="fonta" control={<Radio />} label="Green" />
            <FormControlLabel value="fontb" control={<Radio />} label="Yellow" />
          </RadioGroup>
        </FormControl>

        <Grid item xs={6} sx={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', padding: '10px'}} >
          { (valueA == 'green' && valueB == 'fonta') && (
            <CardMedia  title="Your title">
              <Image src={Pic111} width={"1500px"} height={"900px"} />
          </CardMedia>
          )}
          { (valueA == 'green' && valueB == 'fontb') && (
            <CardMedia  title="Your title">
              <Image src={Pic112} width={"1500px"} height={"900px"} />
          </CardMedia>
          )}
          { (valueA == 'yellow' && valueB == 'fonta') && (
            <CardMedia  title="Your title">
              <Image src={Pic121} width={"1500px"} height={"900px"} />
          </CardMedia>
          )}
          { (valueA == 'yellow' && valueB == 'fontb') && (
            <CardMedia  title="Your title">
              <Image src={Pic122} width={"1500px"} height={"900px"} />
          </CardMedia>
          )}
        </Grid>
        <Grid item xs={6}>
          
        </Grid>
        <Button variant='contained' onClick={
          () => router.push({
            pathname: '/suggest/3bKkRBOIBvR1GDCBLhet'
          })
        }>Next</Button>
      </Grid>
    </>
  )
}

export default EditPage