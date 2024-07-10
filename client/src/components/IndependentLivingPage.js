import React, { useState} from "react";
import { useLocation } from "react-router-dom";
import "../styles/independentLivingPage.css";
import ImageCarousel from "./ImageCarousel";

import HomePage_Photo1 from "./photos/hm-pg-photo1.jpg";
import HomePage_Photo2 from "./photos/hm-pg-photo2.jpg";

const IndependentLivingPage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialIndex = parseInt(queryParams.get("index"), 10) || 0;

    const [independPageIndex, setIndependPageIndex] = useState(initialIndex);

    const independPageImages = [
        HomePage_Photo2,
        HomePage_Photo2,
        HomePage_Photo1,
        HomePage_Photo2,
        HomePage_Photo1,
        HomePage_Photo2,
        HomePage_Photo1,
        HomePage_Photo2,
    ];

    const independLivingTitles = [
        "Housing Designed for Seniors",
        "Maintenance-Free Living",
        "Community and Social Activities",
        "Safety and Security",
        "No Healthcare Services Provided",
        "Independence and Self-Sufficiency",
        "Amenities and Services",
        "Community Atmosphere",
    ];

    const independLivingSubtext = [
        "We offer housing for the needs for our aging population"
    ]

    
    return (
        <div className="independ-pg-container">
            <div className="independ-pg-carousel-container">
                <ImageCarousel 
                    images={independPageImages} 
                    carouselTitles={independLivingTitles}
                    carouselSubText={independLivingSubtext}
                    carouselIndex={independPageIndex} 
                    setCarouselIndex={setIndependPageIndex} 
                />

            </div>

            <div className="independ-pg-content">


                <div className="content-color"/>

            </div>
        </div>
    );}

export default IndependentLivingPage;