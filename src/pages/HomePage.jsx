import React from 'react'
import Hero from '../components/Hero'
import Member from '../components/Member'
import CollegeLogo from '../components/CollegeLogo'

const HomePage = () => {
  return (
    <div className="container mt-4">
    <CollegeLogo/>

      <h1 className="text-center text-danger fw-bold mb-4">
        Project Advisor
      </h1>

      <Hero />

      <h1 className="text-center text-danger fw-bold mt-5 mb-4">
        Team Members
      </h1>

      <Member />

    </div>
  )
}

export default HomePage;