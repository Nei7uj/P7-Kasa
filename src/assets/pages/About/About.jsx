import React from 'react'
import "./About.scss";
import AboutBanner from '../../layout/AboutBanner/AboutBanner'
import DescriptionPanel from '../../components/DescriptionPanel/DescriptionPanel';

function About() {
  return (
    <>
        <AboutBanner />
        <div className='about__container'>
        <DescriptionPanel title="Fiabilité"/>
        <DescriptionPanel title="Respect"/>
        <DescriptionPanel title="Service"/>
        <DescriptionPanel title="Responsabilité"/>
        </div>

    </>
  
  )
}

export default About