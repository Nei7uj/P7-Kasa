import React from 'react'
import { NavLink } from "react-router";
import "./ApartmentCard.scss"

function ApartmentCard(props) {
  return (
      <NavLink to="/flat" end>
        <div className='apartment'>
          <img src={props.imageUrl} alt="" />
          <div className='apartment__subtitle'>{props.title}</div>
        </div>
      </NavLink>
  )
}

export default ApartmentCard