import '../Styles/Major.css'
import CollapseCard from './CollapseCard';
import MultiselectCollapse from './MultiselectCollapse';


const Major = () => {
    return (  

        <div>
            <center className='MajorTitle'>
                <h1>Major Disasters</h1>
            

            <div className='majorContainer'>
                <center>
                    <div className="minorContainer">
                        <div className='select2'><MultiselectCollapse/></div>
                        <div className='select2'><MultiselectCollapse/></div>
                        <div className='select2'><MultiselectCollapse/></div>

                    </div>
                </center>
                <center>
                <div className="minorContainer">
                    <div className='select2'><MultiselectCollapse/></div>
                    <div className='select2'><MultiselectCollapse/></div>
                    <div className='select2'><MultiselectCollapse/></div>
                </div>
                </center>
                
                

            </div>
            </center>

            <center>
                <CollapseCard/>
            </center>
        </div>
        
        



    );
}
 
export default Major;