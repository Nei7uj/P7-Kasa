import React from "react";
import "./ApartmentPage.scss";
import DescriptionPanel from '../../components/DescriptionPanel/DescriptionPanel';
import Carrousel from '../../layout/Carrousel/Carrousel';
import { useParams } from "react-router-dom";

function ApartmentPage({apartments}) {
    const{id}=useParams();
    console.log(id)
    const selectedHouse = apartments.find((logement) => logement.id === id);
    console.log(selectedHouse);
    const name = selectedHouse.host.name;
    const [firstName, lastName] = name.split(" ");

    return(
        <div className="apartment-page">  
            <Carrousel pictures={selectedHouse.pictures} />
            <div className="apartment__header">
                <div className="apartment__title">
                    <h1>{selectedHouse.title}</h1>
                        <h2>{selectedHouse.location}</h2>
                    <div className="apartment__tags">
                        {selectedHouse.tags.map((tag) => (<span>{tag}</span>))}
                        
                    </div>
                </div>
                <div className="apartment__owner">
                    <div className="apartment__owner__details">
                        <h3>
                            <span>{firstName}</span> 
                            <span>{lastName}</span>
                        </h3>
                        <div className="apartment__owner__badge">
                            <img src={selectedHouse.host.picture} alt="" />
                        </div>
                    </div>
                    <div className="apartment__owner__stars">
                        {[1, 2, 3, 4, 5,].map ((num) => (<span className={selectedHouse.rating >= num ? "on" : ""} >★</span>))}
                    </div>
                </div>
            </div>
            <div className="apartment__info__area">
                <DescriptionPanel title="Description" content={selectedHouse.description}/>
                <DescriptionPanel title="Equipements" content={selectedHouse.equipments.map((eq) => (<li>{eq}</li>))}/>
            </div>
        </div>

    ) 
}

export default ApartmentPage;