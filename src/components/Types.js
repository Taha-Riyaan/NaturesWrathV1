import '../Styles/Types.css'
import Collapsible from './Collapsible';

const Types = () => {

    const title = "Disaster (example)"
    const title2 = "Response"
    const para = "Information About Disaster, information will be detailed and may have some degree of length to it The background will be a picture of this specific disaster, and the text will be formatted to ensure there is no clash in colours making it unreadable  |   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac lectus a risus consectetur viverra egestas et lectus. Vivamus tempus lorem ante, eget ultricies est dapibus in. Sed finibus sit amet lacus non imperdiet. Suspendisse pellentesque nisi eros. Phasellus sit amet accumsan odio, quis pellentesque erat."
    const para2 = "Information about how these disasters are tackled and which organizations are involved  |  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac lectus a risus consectetur viverra egestas et lectus. Vivamus tempus lorem ante, eget ultricies est dapibus in. Sed finibus sit amet lacus non imperdiet. Suspendisse pellentesque nisi eros. Phasellus sit amet accumsan odio, quis pellentesque erat."

    return ( 
        <center className='TypesTitle'>
            <h1>Types of Natural Disasters</h1>

            <div >
                <Collapsible
                title={title} 
                title2={title2}
                para={para}
                para2={para2}/>

            </div >

            <div id="test">
                <Collapsible 
                title="Placeholder test" para="Lorem Ipsun" title2="Lorem Ipsun" para2="Lorem Ipsum"/>

            </div>

            <div>
                <Collapsible 
                title="Lorem Ipsum" para="Lorem Ipsun" title2="Lorem Ipsun" para2="Lorem Ipsum"/>

            </div>

            <div>
                <Collapsible 
                title="Lorem Ipsum" para="Lorem Ipsun" title2="Lorem Ipsun" para2="Lorem Ipsum"/>

            </div>

            <div>
                <Collapsible 
                title="Lorem Ipsum" para="Lorem Ipsun" title2="Lorem Ipsun" para2="Lorem Ipsum"/>

            </div>

            <div>
                <Collapsible 
                title="Lorem Ipsum" para="Lorem Ipsun" title2="Lorem Ipsun" para2="Lorem Ipsum"/>

            </div>

            <div>
                <Collapsible 
                ttitle="Lorem Ipsum" para="Lorem Ipsun" title2="Lorem Ipsun" para2="Lorem Ipsum"/>

            </div>

            <div>
                <Collapsible 
                title="Lorem Ipsum" para="Lorem Ipsun" title2="Lorem Ipsun" para2="Lorem Ipsum"/>

            </div>

            <div>
                <Collapsible 
                title="Lorem Ipsum" para="Lorem Ipsun" title2="Lorem Ipsun" para2="Lorem Ipsum"/>

            </div>

        </center>


     );
}
 
export default Types;