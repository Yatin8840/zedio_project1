import React from 'react'
import Hero from '../Hero/Hero'
import Grid from '../Grid/grid'
import Offer from '../Offer/Offer'
import Team from '../Team/Team'
import WorkingProcess from '../WorkingProcess/WorkingProcess'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div>
        <Hero/>
        <Grid/>
        <Offer/>
        <Team/>
        <WorkingProcess/>
        <Footer/>
    </div>
  )
}

export default Home