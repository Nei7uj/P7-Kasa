import React from "react";
import "./DescriptionPanel.scss";


function DescriptionPanel(props) {
    return (
        <div className="apartment__description">
                    <p className="description__header">
                        <span>{props.title}</span>
                        <i class="fa-solid fa-chevron-down"></i>
                    </p>

                    <p className="description__content">Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.</p>
                </div>
    )
}

export default DescriptionPanel