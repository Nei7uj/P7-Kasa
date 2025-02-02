import React from 'react'
import "./HomePage.scss";
import Banner from '../../layout/Banner/Banner'
import ApartmentGrid from '../../components/ApartmentGrid/ApartmentGrid'
import Main from '../../layout/Main/Main'

function HomePage() {
  return (
    <div>
      <Main>
        <Banner />
        <ApartmentGrid />
      </Main>
    </div>
  )
}

export default HomePage