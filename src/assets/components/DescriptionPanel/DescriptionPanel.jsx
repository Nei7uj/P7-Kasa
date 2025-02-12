import React, { useState } from "react";
import "./DescriptionPanel.scss";

function DescriptionPanel(props) {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const toggleContent = () => {
        setIsContentVisible(!isContentVisible);
    };

    return (
        <div className="apartment__description">
            <p className="description__header">
                <span>{props.title}</span>
                <i 
                    className={`fa-solid ${isContentVisible ? "fa-chevron-up" : "fa-chevron-down"}`} 
                    onClick={toggleContent}
                ></i>
            </p>

            {isContentVisible && (
                <p className="description__content">
                    {props.content}
                </p>
            )}
        </div>
    );
}

export default DescriptionPanel;