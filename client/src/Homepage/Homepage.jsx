import React from 'react'
import MiddlePart from './components/MiddlePart'
import Heroes from './components/Heroes'
import TopPart from './components/TopPart'
import Build from './components/Build'
import Footer from './components/Footer'

const Homepage = () => {
  return (
    <>
      <TopPart />
      <MiddlePart />
      <Heroes />
      <Build />
      <Footer />
    </>
  )
}

export default Homepage