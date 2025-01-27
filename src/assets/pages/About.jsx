import React from 'react'
import "./About.scss";
import Banner from '../layout/Banner'
import DescriptionPanel from '../components/DescriptionPanel';

function About() {
  return (
    <>
        <Banner />
        <div className='about__container'>
        <DescriptionPanel />
        <DescriptionPanel />
        <DescriptionPanel />
        <DescriptionPanel />
        </div>

    </>
  
  )
}

export default About