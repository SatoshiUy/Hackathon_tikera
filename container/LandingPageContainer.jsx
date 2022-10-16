import React from 'react'
import { Container } from '@mui/material';

import Hero from '../components/Hero.component'
import Cards from '../components/Cards'

export default function LandingPageContainer() {
  return (
    <Container>
      <Hero />
      <Cards />
    </Container>
  )
}
