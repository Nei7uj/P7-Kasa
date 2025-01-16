import React from "react";
import "./ApartmentPage.scss";

function ApartmentPage() {
    return(
        <div className="apartment-page">  
            <div>
                <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="" />
            </div>
            <div className="apartment__header">
                <div className="apartment__title">
                    <h1>Appartement cosy</h1>
                        <h2>Ile de France - Paris 17e</h2>
                    <div className="apartment__tags">
                        <span>Batignolle</span>
                        <span>Montmartre</span>
                    </div>
                </div>

                <div className="apartment__owner">
                    <div className="apartment__owner__details">
                        <h3>
                            <span>Nathalie</span> 
                            <span>Jean</span>
                        </h3>
                        <div className="apartment__owner__badge"></div>
                    </div>
                    <div className="apartment__owner__stars">
                        <span className="on">★</span>
                        <span className="on">★</span>
                        <span className="on">★</span>
                        <span className="off">★</span>
                        <span className="off">★</span>
                    </div>
                </div>
            </div>
                <div className="apartment__description">
                    <p className="description__header">Description</p>
                    <p className="description__content">Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.</p>
                </div>
                <div className="apartment__equipements">
                    <p>Equipements</p>
                    <span>Équipements de base</span>
                    <span>Micro-Ondes</span>
                    <span>Douche italienne</span>
                    <span>Frigo</span>
                    <span>WIFI</span>
                </div>
        </div>

    ) 
}

export default ApartmentPage;