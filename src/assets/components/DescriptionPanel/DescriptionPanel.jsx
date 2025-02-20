import React, { useState } from "react";
import "./DescriptionPanel.scss";

function DescriptionPanel(props) {
    const [isContentVisible, setIsContentVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleContent = () => {
        if (isContentVisible) {
            setIsAnimating(true);
            setTimeout(() => {
                setIsAnimating(false);
                setIsContentVisible(false);
            }, 200);
        } else {
            setIsContentVisible(true);
        }
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
                <p className={`description__content ${isAnimating ? "hidden" : ""}`}>
                    {props.content}
                </p>
            )}
        </div>
    );
}

export default DescriptionPanel;
