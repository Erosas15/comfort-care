import React from "react";
import { useState } from "react";
import "../styles/independentLivingPage.css";

import ImageCarousel from "./imageCarousel";

// imported images  TODO update these images
import HomePage_Photo1 from "./photos/hm-pg-photo1.jpg";
import HomePage_Photo2 from "./photos/hm-pg-photo2.jpg";

const IndependentLivingPage = () => {
    const [independPageIndex, setIndependPageIndex] = useState(0);

    const independPageImages = [
        HomePage_Photo1,
        HomePage_Photo2,
        HomePage_Photo1,
        HomePage_Photo2,
        HomePage_Photo1,
        HomePage_Photo2,
        HomePage_Photo1,
        HomePage_Photo2,
    ];

    const subtitles = [
        'Housing Designed for Seniors',
        'Maintenance-Free Living',
        'Community and Social Activities',
        'Safety and Security',
        'No Healthcare Services Provided',
        'Independence and Self-Sufficiency',
        'Amenities and Services',
        'Community Atmosphere',
    ];
    
    return (
        <div className="independ-pg-container">
            <div className="independ-pg-carousel-container">
                <ImageCarousel 
                    images={independPageImages} 
                    carouselIndex={independPageIndex} 
                    setCarouselIndex={setIndependPageIndex} 
                />
            </div>

            <div className="independ-pg-subtitles">
                <h2>{subtitles[independPageIndex]}</h2>
            </div>
        </div>
    );}

export default IndependentLivingPage;