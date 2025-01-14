import React from 'react'
import { NavLink } from "react-router";
import "./Apartment.scss"

function Apartment() {
  return (
    <div className='apartment'>
      <NavLink to="/flat" end>
        <div className='apartment__subtitle'>Titre de la location</div>
      </NavLink>
    </div>
  )
}

export default Apartment