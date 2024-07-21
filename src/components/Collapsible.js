import "../Styles/Collapsible.css";
import React, { useState } from "react";
import plus from "../Images/plus.png";
import minus from "../Images/minus.png";
import Quiz from './Quiz';




const Collapsible =(child)=>{
    const [open, setOPen] = useState(false);

    const toggle = () => {
        setOPen(!open);
    };
    
    return(
        <div>
            
            <hr className="colDivider-hr2"/>

            <div className="btn1" >
                <div className="spacebtw" onClick={toggle}>
                    <h2>{child.title0}</h2>
                    {open ? <img src={minus} alt="+" className="icon" /> : <img src={plus} alt="+" className="icon" />}
                </div>
                
                
                {open && (
                
                <div className="toggle">
                    <center>
                        <hr className="colDivider-hr"/>
                        
                    </center>


                    {child.check ? (
                        <div>
                            <h4>{child.para}</h4>
                            <h2>{child.title2}</h2>
                            <h4>{child.para2}</h4>
                            <h2>{child.title3}</h2>
                            <h4>{child.para3}</h4>
                        </div>
                    ) : (
                        <div>
                            <h4>{child.para}</h4>
                            <h2>{child.title2}</h2>
                            <h4>{child.para2}</h4>
                            <h2>{child.title3}</h2>
                            <h4>{child.para3}</h4>
                            

                            <div className="quizContainer">
                                <Quiz title={child.title} /> 
                            </div>

                            
                            
                        </div>
                    )}
                    

            </div>
            )}
        </div>
        </div>

        
    )
}
export default Collapsible;


/*
<h2>Severity</h2>
<h4>short explanation</h4>
{image of scale } 
<h2>Recommended Shelter</h2>
<h4>short explanation</h4>
<h2>Preparation</h2>
<h4>short explanation</h4>
<h2>Areas of Occurance</h2>
<h4>provinces in which these happen</h4>
<h2>Government of Canada Weblink?</h2>
*/