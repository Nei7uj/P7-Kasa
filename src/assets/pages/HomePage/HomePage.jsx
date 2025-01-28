import React from 'react'
import "./HomePage.scss";
import Banner from '../../layout/Banner'
import ApartmentGrid from '../../components/ApartmentGrid'
import Main from '../../layout/Main'

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