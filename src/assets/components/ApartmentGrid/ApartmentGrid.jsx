import React, {useEffect, useState} from 'react';
import "./ApartmentGrid.scss";
import ApartmentCard from '../ApartmentCard/ApartmentCard';

function ApartmentGrid({apartments}) {

  return ( 
    <div className='grid'>
      {apartments.map((apartment) => (
        <ApartmentCard 
          title={apartment.title} 
          imageUrl={apartment.cover}
          key={apartment.id}
          id={apartment.id}
          location={apartment.location} />
    ))}
  </div>
  )
}

export default ApartmentGrid