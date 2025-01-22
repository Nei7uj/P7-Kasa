import React, {useEffect, useState} from 'react';
import "./ApartmentGrid.scss";
import Apartment from './ApartmentCard';
import ApartmentCard from './ApartmentCard';

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
        <ApartmentCard title={apartment.title} imageUrl={apartment.cover} />
    ))}
  </div>
  )
}

export default ApartmentGrid