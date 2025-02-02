import React from 'react'
import "./About.scss";
import Banner from '../../layout/Banner/Banner'
import DescriptionPanel from '../../components/DescriptionPanel/DescriptionPanel';

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