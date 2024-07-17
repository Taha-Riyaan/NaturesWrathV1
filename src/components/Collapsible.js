import "../Styles/Collapsible.css";
import React, { useState } from "react";




const Collapsible =(child)=>{
    const [open, setOPen] = useState(false);

    const toggle = () => {
        setOPen(!open);
    };
    
    return(
        <div>
            <hr className="colDivider-hr2"/>

            <div className="btn1" onClick={toggle}>
            <h2>{child.title}</h2>
            {open && (
            <div className="toggle">
                <center>
                    <hr className="colDivider-hr"/>
                </center>
                
                <h4>{child.para}</h4>
                <h2>{child.title2}</h2>
                <h4>{child.para2}</h4>
            </div>
            )}
        </div>
        </div>

        
    )
}
export default Collapsible;