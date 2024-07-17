
import Carousel from './Carousel';
import Timeline from './Timeline';
import Divider from './Divider';
import InfoBody from './InfoBody';

const Home = () => {
    return ( 
        <div className="App">
        
        <div className="content">
            <Carousel />
            <Divider/>
            <InfoBody/>
            <Divider/>
            <Timeline/>
        </div>
        </div>
        
    );
}
 
export default Home;