import React, { useState, useEffect } from 'react';
import '../Styles/Carousel.css';


const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const slides = [
        {
            image: 'https://via.placeholder.com/800x400', 
            title: 'Title of Image',
            text: 'info. about Image'
        },
        {
            image: 'https://via.placeholder.com/800x400', 
            title: 'Title of Image',
            text: 'info. about Image'
        },
        {
            image: 'https://via.placeholder.com/800x400',
            title: 'Title of Image',
            text: 'info. about Image'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 8000); 

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