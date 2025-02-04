import React, { useState } from "react";
import "./DescriptionPanel.scss";

function DescriptionPanel(props) {
    const [isContentVisible, setIsContentVisible] = useState(false);

    const showContent = () => {
        setIsContentVisible(!isContentVisible);
    }
    const contentClass = isContentVisible ? "visible" : "hidden";
    return (
        <div className="apartment__description">
                    <p className="description__header">
                        <span>{props.title}</span>
                        <i class="fa-solid fa-chevron-down" onClick={showContent}></i>
                    </p>

                    {isContentVisible &&<p className="description__content">
                        {props.content}
                        </p>}
                </div>
    )
}

export default DescriptionPanel