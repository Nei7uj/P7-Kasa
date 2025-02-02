import React, {useEffect, useState} from 'react';
import "./ApartmentGrid.scss";
import ApartmentCard from '../ApartmentCard/ApartmentCard';

function ApartmentGrid() {
  const [apartments, setApartments] = useState([]);

  useEffect(fetchApartments, []);

  function fetchApartments() {
    fetch("logements.json")
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error);
  }

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