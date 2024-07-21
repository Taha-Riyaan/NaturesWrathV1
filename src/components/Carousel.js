import React, { useState, useEffect } from 'react';
import '../Styles/Carousel.css';
import wildfire from "../Images/wildfire.png";
import flood from "../Images/flood.png";
import tornado from "../Images/tornado.png";


const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const slides = [
        {
            image: wildfire, 
            title: 'Fort McMurray Wildfires, Alberta 2016',
            text: "On May 1, 2016, a wildfire began southwest of Fort McMurray, Alberta, Canada. On May 3, it swept through the community, forcing the largest wildfire evacuation in Alberta's history, with upwards of 88,000 people forced from their homes. Firefighters were assisted by personnel from both the Canadian Armed Forces and Royal Canadian Mounted Police, as well as other Canadian provincial agencies, to fight the wildfire."
        },
        {
            image: flood, 
            title: 'Southern Alberta Floods, Alberta 2013',
            text: "In the days leading up to June 19, 2013, parts of southern and central Alberta, Canada experienced heavy rainfall that triggered catastrophic flooding described by the provincial government as the worst in Alberta's history. Areas along the Bow, Elbow, Highwood, Red Deer, Sheep, Little Bow, and South Saskatchewan rivers and their tributaries were particularly affected. A total of 32 states of local emergency were declared and 28 emergency operations centres were activated as water levels rose and numerous communities were placed under evacuation orders"
        },
        {
            image: tornado,
            title: 'Regina Cyclone, Saskatchewan 1912',
            text: 'The Regina Cyclone, or Regina tornado of 1912, was a tornado that devastated the city of Regina, Saskatchewan, Canada, on Sunday, June 30, 1912. It remains the deadliest tornado in Canadian history with a total of 28 fatalities and about 300 people injured. At about 4:50 p.m., green funnel clouds formed and touched down south of the city, tearing through the residential area between Wascana Lake and Victoria Avenue, and continuing through the downtown business district, rail yards, warehouse district, and northern residential area.'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 10000); 

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const setSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel">
            <div className="carousel-slide">
                <img src={slides[currentIndex].image} alt={slides[currentIndex].title} />
                <h2>{slides[currentIndex].title}</h2>
                <p>{slides[currentIndex].text}</p>
            </div>
            <div className="carousel-controls">
                <button className="carousel-control prev" onClick={prevSlide}>❮</button>
                <div className="carousel-dots">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setSlide(index)}
                        ></span>
                    ))}
                </div>
                <button className="carousel-control next" onClick={nextSlide}>❯</button>
            </div>
        </div>
    );
};

export default Carousel;