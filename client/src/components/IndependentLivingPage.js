import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/independentLivingPage.css";
import ImageCarousel from "./ImageCarousel";

import Indenpend_Photo1 from "./photos/independentLiving_pg/independ-pg-1.jpg";


const CareSection = ({ independPageIndex, image }) => {
  const careSectionText = [
    "Our senior-friendly housing is thoughtfully designed with your comfort and accessibility in mind. From step-free entrances to wide hallways, every detail is crafted to make daily living easier and more enjoyable. Enjoy a home that caters to your needs, providing a safe and comfortable environment for your golden years.",
    "Say goodbye to the hassles of home maintenance and repairs. Our maintenance-free living ensures that you can spend your time on what truly matters. With our dedicated team handling all the upkeep, you can enjoy a worry-free lifestyle, focusing on activities and hobbies you love.",
    "Stay engaged and connected with a vibrant community offering a wide range of social activities. From fitness classes to hobby groups, our community events foster friendships and a sense of belonging. Enjoy an active social life, discovering new interests and making lasting memories.",
    "The Home Support Service Program helps individuals get a caregiver to assist with their daily needs, ensuring they can live comfortably and independently at home. Our mobile medical clinic brings professional medical care right to your doorstep. Our medical professionals will visit you in the comfort of your home, providing the care you need without the need to travel.",
    "Our focus is on providing a lifestyle of independence without the integration of healthcare services. Enjoy the freedom to live on your terms, choosing your healthcare providers and managing your wellness independently. Experience a community that supports your self-sufficiency.",
    "Embrace a lifestyle that values your independence and self-sufficiency. Our community is designed to empower you to live autonomously, with the support and resources you need to thrive. Enjoy the freedom to make your own choices and live life your way.",
    "Discover a wealth of amenities and services designed to enhance your daily living. From on-site dining and fitness centers to transportation services and housekeeping, everything you need is conveniently available. Experience a life of ease and convenience with all the essentials at your fingertips.",
    "Feel the warmth of a welcoming community where neighbors become friends. Our inviting atmosphere fosters a sense of camaraderie and belonging, making every day a pleasure. Enjoy a supportive and friendly environment where you can truly feel at home."
  ];

  return (
    <div className="care-section">
      <div className="care-text">
        {careSectionText[independPageIndex]}
      </div>
      <div className="care-image">
        <img src={image} alt="Personalized Care" />
      </div>
    </div>
  );
};

const IndependentLivingPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialIndex = parseInt(queryParams.get("index"), 10) || 0;

  const [independPageIndex, setIndependPageIndex] = useState(initialIndex);

  const independPageImages = [
    Indenpend_Photo1,
    Indenpend_Photo1,
    Indenpend_Photo1,
    Indenpend_Photo1,
    Indenpend_Photo1,
    Indenpend_Photo1,
    Indenpend_Photo1,
    Indenpend_Photo1,
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
    ""
  ];

  const independLivingSubTitles = [
    "Comfort and Style for Your Golden Years",
    "Enjoy Life, We'll Handle the Rest",
    "Stay Active, Stay Connected",
    "Peace of Mind, Day and Night",
    "Independent Living, Your Way",
    "Your Life, Your Choices",
    "Everything You Need, All in One Place",
    "A Warm Welcome, Every Day"
  ];

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
        <div className="independ-pg-subtitles">
          {independLivingSubTitles[independPageIndex]}
        </div>

        <div className="content-color" />

        <CareSection 
          independPageIndex={independPageIndex} 
          image={independPageImages[independPageIndex]} 
        />
      </div>
    </div>
  );
};

export default IndependentLivingPage;
