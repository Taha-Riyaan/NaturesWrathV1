import React, { useState } from "react";
import "../Styles/CollapseCard.css";
import temp from "../Images/temp.jpg"
import { major } from '../InfoFiles/Major/Major'

const CollapseCard = () => {

    const { info } = major
    const { province, type, year, humanCasulties, name, general} = info[0]
   
    
    const [expanded, setExpanded] = useState(false);

    const handleCardClick = () => {
        setExpanded(!expanded);
    };

    return (

        

        <div className="Major-card" onClick={handleCardClick}>
            
            <div className="Major-card-title">
                <h2>Lorem Ipsum | Date</h2>
            </div>
            {expanded && (
                <>
                <hr />
                <img src= {temp} alt="Card" className="Major-card-image" />
                <div className="Major-card-extra">
                    <h3>This is additional information that appears when the card is expanded.</h3>
                </div>
                </>
            )}
        </div>
    );
};

export default CollapseCard;