import React, {useState} from "react";
import "./Carrousel.scss";

export function Carrousel(props) {
    const pictures = props.pictures;
    const [currentPicture, setCurrentPicture] = useState(0);
    const getClassName = (i) => {
        if (i === currentPicture) return "show";
        return "";
    }
    const moveToNext = () => {
        setCurrentPicture((currentPicture + 1) % pictures.length);
    }
    const moveToPrevious = () => {
        const newCurrentPicure = currentPicture - 1;
        if (newCurrentPicure < 0) {
            setCurrentPicture(pictures.length -1);
            return;
        }
        setCurrentPicture((currentPicture - 1));
    }

    return (
        <div className="carrousel__image">
            <div className="image__container">
            {pictures.map((pic, i) => (
                <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
            ))}
            </div>
            <button className="btn btn-next" onClick={moveToNext}>
                <i className="fas fa-chevron-right"></i>
            </button>
            <button className="btn btn-previous" onClick={moveToPrevious}>
            <i className="fas fa-chevron-left"></i>
            </button>
        </div>
    )
}
export default Carrousel;