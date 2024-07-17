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
                    title="Title | Date" 
                    para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TimelineRight
                    title="Title | Date" 
                    para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TimelineLeft 
                    title="Title | Date" 
                    para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                <TimelineRight
                    title="Title | Date" 
                    para="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                />
                
            </div>
        </center>
    );
};

export default Timeline;