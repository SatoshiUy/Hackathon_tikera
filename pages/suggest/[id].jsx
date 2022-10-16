import React from 'react'
import MainNavigation from '../../components/MainNavigation.component'
import MainFooter from '../../components/MainFooter.component'
import SuggestContainer from '../../container/SuggestContainer'

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