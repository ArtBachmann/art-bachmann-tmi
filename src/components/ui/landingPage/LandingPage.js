import React from 'react'
import LandingBlock from './LandingBlock'
import ServicesBlock from './ServicesBlock.js'
import RevolutionBlock from './RevolutionkBlock'
import GraphQLBlock from './GraphQLBlock'
import QR from './QRBlock'


const LandingPage = () => {
  return (
    <div>
      <LandingBlock />
      <QR />
      <ServicesBlock />
      <GraphQLBlock />
      <RevolutionBlock />
    </div>
  )
}

export default LandingPage