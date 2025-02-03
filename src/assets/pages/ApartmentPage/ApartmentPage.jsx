import React from "react";
import "./ApartmentPage.scss";
import DescriptionPanel from '../../components/DescriptionPanel/DescriptionPanel';
import { useParams } from "react-router-dom";

function ApartmentPage({apartments}) {
    const{id}=useParams();
    console.log(id)
    const selectedHouse = apartments.find((logement) => logement.id === id);
    console.log(selectedHouse);
    return(
        <div className="apartment-page">  
            <div>
                <img src={selectedHouse.cover} alt="" />
            </div>
            <div className="apartment__header">
                <div className="apartment__title">
                    <h1>{selectedHouse.title}</h1>
                        <h2>{selectedHouse.location}</h2>
                    <div className="apartment__tags">
                        <span>{selectedHouse.tags}</span>
                    </div>
                </div>

                <div className="apartment__owner">
                    <div className="apartment__owner__details">
                        <h3>
                            <span>Nathalie</span> 
                            <span>Jean</span>
                        </h3>
                        <div className="apartment__owner__badge">
                        </div>
                    </div>
                    <div className="apartment__owner__stars">
                        <span>{selectedHouse.rating}</span>
                    </div>
                </div>
            </div>
            <div className="apartment__info__area">
                <DescriptionPanel title="Description"/>
                <DescriptionPanel title="Equipements"/>
            </div>
        </div>

    ) 
}

export default ApartmentPage;