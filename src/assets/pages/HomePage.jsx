import React from 'react'
import Navbar from '../components/Navbar'
import "./HomePage.scss";
import Banner from '../layout/Banner'
import ApartmentGrid from '../components/ApartmentGrid'
import Main from '../layout/Main'
import Footer from '../layout/Footer'

function HomePage() {
  return (
    <div>
      <Navbar />
      <Main>
        <Banner />
        <ApartmentGrid />
      </Main>
      <Footer />
    </div>
  )
}

export default HomePage