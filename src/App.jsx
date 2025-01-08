import React from 'react'
import Navbar from './assets/components/Navbar'
import "./App.css";
import Banner from './assets/components/Banner'
import ApartmentGrid from './assets/components/ApartmentGrid'
import Main from './assets/components/Main'
import Footer from './assets/components/Footer'

function App() {
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

export default App