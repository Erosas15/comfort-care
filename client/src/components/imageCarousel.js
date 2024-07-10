import "../styles/imageCarousel.css"
import React from "react";
import { useState } from "react";

const ImageCarousel = ({images, carouselIndex, setCarouselIndex}) => {

    function showNextImage() {
        setCarouselIndex((carouselIndex + 1) % images.length);
    }

    function showPrevImage() {
        setCarouselIndex((carouselIndex -1 + images.length) % images.length);
    }

    function goToImage(index) {
        setCarouselIndex(index);
    }
    
    return(
        <div className="img-carousel">
            <div className="left-arrow" onClick={showPrevImage}>&#x276E;</div>

            <div className="right-arrow" onClick={showNextImage}>&#x276F;</div>

            <div style={{backgroundImage: `url(${images[carouselIndex]})`}} 
                className="carousel">
            </div>

            <div className="carousel-selector">
                {images.map((images,carouselIndex) => (
                    <div key={carouselIndex} className="dot-container" 
                    onClick={() => goToImage(carouselIndex)}>•</div>
                ))}
            </div>
          
        </div>
    )
}

export default ImageCarousel;