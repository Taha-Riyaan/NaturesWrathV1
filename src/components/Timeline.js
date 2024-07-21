import React from 'react';
import '../Styles/Timeline.css';
import TimelineLeft from './TimelineLeft';
import TimelineRight from './TimelineRight';

const Timeline = () => {

    return (
        <center>
            <h1 className="timelineTitle">Timeline of Major Events</h1>

            <div className="timelineContainer">
                <TimelineLeft 
                    title="Fort McMurray Wildfires, Alberta | 2016" 
                    para=" By far the costliest natural disaster in Canadian history was the wildfire that razed 590,000 hectares around Fort McMurray in the summer of 2016, incurring $9.9 billion in damages. Temperatures of 33 degrees Celsius combined with desert-dry brush created the perfect conditions for the blaze."
                />
                <TimelineRight
                    title="Southern Alberta Floods, Alberta | 2013" 
                    para="The Alberta floods where the worst floods in Alberta's history. The floods caused as much as $6 billion dollars in different damages. These floods and water have caused many damages.  "
                />
                <TimelineLeft 
                    title="Regina Cyclone, Saskatchewan | 1912" 
                    para="Sometimes referred to as Canada's deadliest tornado, the tornado tore through Regina, with 400km/hour winds. It killed 28 people, and left 2500 people with out homes, flattening many houses, and most of the business district."
                />
                <TimelineRight
                    title="Rogers Pass Avalanche, British Columbia | 1910" 
                    para="The TransCanada Railway ran through the Rogers Pass where the snow piles up in the rails often and one night the train came by, and the snow came down on to the track and derailed the locomotive killing 62 men."
                />
                <TimelineLeft 
                    title="Hurricane, Nova Scotia | 1873" 
                    para= " 'The Lord's Day Gale' was a very deadly storm, despite having relatively low wind speeds only be a Category 2 hurricane. It destroyed 1200 boats and 900 buildings in Nova Scotia and killed at least 233 people. This deadly Hurricane will be remembered for a long time."
                />
                <TimelineRight
                    title="Hurricane, Newfoundland | 1775" 
                    para="  The Great Newfoundland Hurricane caused approximately 4000 deaths in total, and most of the lives that where lost where English and Irish sailor on the eastern and western coast of Newfoundland. On September 9, a second tempest wrecked as many as 700 boats, including two Royal Navy Schooners."
                />
                <TimelineLeft 
                    title="Cascadia Earthquake, British Columbia | 1700" 
                    para="The Cascadia earthquake occurred along with the Cascadia subduction zone in late January of 1700, with an estimated magnitude of 8.7 to 9.2, causing where 4400 to 10400 casualties. This was so devastation to so many. "
                />
                <TimelineRight
                    title="Tseax Cone Eruption, British Columbia | 1690" 
                    para="Canada’s deadliest volcanic eruption killed 2,000 Indigenous peoples. It was the worst known geophysical disaster in our country’s history. The eruption produced a plume of toxic smoke and a river of lava that destroyed two villages and suffocated thousands of people. "
                />
                
            </div>
        </center>
    );
};

export default Timeline;