import React, { useState } from "react";
import "../Styles/CollapseCard.css";

const CollapseCard = () => {
    const [expanded, setExpanded] = useState(false);

    const handleCardClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="Major-card" onClick={handleCardClick}>
        <img src="../Images/3050552.jpg" alt="Card" className="Major-card-image" />
        <div className="Major-card-title">
            <h3>Lorem Ipsum | Date</h3>
        </div>
        {expanded && (
            <>
            <hr />
            <div className="Major-card-extra">
                <p>This is additional information that appears when the card is expanded.</p>
            </div>
            </>
        )}
        </div>
    );
};

export default CollapseCard;