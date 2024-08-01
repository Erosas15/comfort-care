import React, { useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";

import "../styles/homePage.css";

// imported images
import Carousel1 from "./photos/carousel/carousel-1.png";
import Carousel2 from "./photos/carousel/carousel-2.png";
import Carousel3 from "./photos/carousel/carousel-3.png";
import Carousel4 from "./photos/carousel/carousel-4.png";

import HomePage_Plaque1 from "./photos/home_pg/hm-pg-plaque-1.png";
import HomePage_Plaque2 from "./photos/home_pg/hm-pg-plaque-2.png";
import HomePage_Plaque3 from "./photos/home_pg/hm-pg-plaque-3.png";
import HomePage_Plaque4 from "./photos/home_pg/hm-pg-plaque-4.png";
import HomePage_Plaque5 from "./photos/home_pg/hm-pg-plaque-5.png";
import HomePage_Plaque6 from "./photos/home_pg/hm-pg-plaque-6.png";
import HomePage_Plaque7 from "./photos/home_pg/hm-pg-plaque-7.png";
import HomePage_Plaque8 from "./photos/home_pg/hm-pg-plaque-8.png";



const HomePageForm = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [bodyMessage, setBodyMessage] = useState("");

    const [feedbackMessage, setFeedbackMessage] = useState("");

    const defaultEmail = "villalobos@comfortcare247.com";
    const subject = "Comfort Care Interest From Website";

    const sendEmail = () => {
        if(!bodyMessage){
            setFeedbackMessage("Please enter a message");
            return;
        }

        if(!email){
            setFeedbackMessage("Please enter an email");
            return;
        }

        if(!phone){
            setFeedbackMessage("Please enter a phone number");
            return;
        }

        let contactInfo = "";
        contactInfo += `Email: ${email}\n`;
        contactInfo += `Phone Number: ${phone}\n`;

        const message = `${contactInfo}Message: \n${bodyMessage}`;

        axios
        .post("http://localhost:3001/send-email", {
            email: defaultEmail,
            subject: subject,
            message: message,
        })
        .then(() =>{
            console.log("Email sent successfully");
            setFeedbackMessage("Your message has been sent successfully!");  
            
            setEmail("");
            setPhone("");
            setBodyMessage("");
        })
        .catch((error) => {
            setFeedbackMessage("Error sending message. Please try again later.");
            console.error("Error", error);
        });
    };

    return (
        <div className="home-pg-form-container">
            <div className="home-pg-form-title">Get in Touch</div>

            <div className="home-pg-form-text">Urgent? Call now.</div>

            <button className="home-pg-form-phone-button">(951) 500 - 0904</button>

            <form className="home-pg-form">
                <input
                    className="home-pg-form-contact-email"
                    type="email"
                    placeholder="johndoe@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                    required/>

                <input
                    className="home-pg-form-contact-num"
                    type="tel"
                    placeholder="(999) 000-000"
                    onChange={(e) => setPhone(e.target.value)}
                    required/>

                <textarea
                    className="home-pg-form-message"
                    name="message"
                    placeholder="Message"
                    onChange={(e) => setBodyMessage(e.target.value)}/>


                <button
                    onClick ={sendEmail}
                    className="home-pg-form-btn"
                    type="button">
                        Send Message
                </button>

                {feedbackMessage && (
                    <div className="home-pg-form-feedback-message">
                        {feedbackMessage}
                    </div>
                )}
            </form>

        </div>
    )
}

const HomePageInfoCards = () => {
    return (
        <div className="home-pg-info-card-container">
            <h2 className="info-card-title">What Is Independent Living?</h2>
    
            <div className="info-card-information-container">
                
                <Link to="/independent-living?index=0" className="info-card-link">
                    <div className="info-card-information">
        
                        <div className="info-cards">
                            <img src={HomePage_Plaque1} alt="test"/>
                            <div className="info-card-subtitle"> Housing Designed for Seniors</div>
                        </div>
                        
                        <div className="info-card-text"> These are often age-restricted 
                            housing facilities like apartments, townhouses, or even single-family homes. 
                            These residences are designed with the needs of older adults
                            in mind, often featuring user-friendly, accessible designs 
                            like single-level living, no-step entries, and wider doorways.
                        </div>
                    </div>
                </Link>

                <Link to="/independent-living?index=1" className="info-card-link">
                    <div className="info-card-information">                    
                        <img src={HomePage_Plaque2} alt="test"/>
                        <div className="info-card-subtitle">Maintenance-Free Living</div>
        
                        <div className="info-card-text"> 
                        Independent living facilities typically handle all maintenance tasks,
                        including lawn care, housekeeping, and repairs. This allows residents
                        to live without the burden of maintaining a home, which can be physically 
                        demanding and time-consuming.
                        </div>
                    </div>
                </Link>
    
                <Link to="/independent-living?index=2" className="info-card-link">
                    <div className="info-card-information">
                        <img src={HomePage_Plaque3} alt="test"/>
                        <div className="info-card-subtitle">Community and Social Activities</div>
        
                        <div className="info-card-text">
                        These communities often offer a variety of social, recreational, and 
                        educational activities. This can include group outings, fitness classes, 
                        hobby clubs, and events. The goal is to foster a sense of community and 
                        provide opportunities for residents to engage with each other.
                        </div>
                    </div>
                </Link>

                <Link to="/independent-living?index=3" className="info-card-link">
                    <div className="info-card-information">
        
                        <img src={HomePage_Plaque4} alt="test"/>
                        <div className="info-card-subtitle">Safety and Security</div>
        
                        <div className="info-card-text">
                        Independent living communities are generally equipped with safety features 
                        such as emergency call systems, security personnel, and secure entrances to 
                        ensure the safety and well-being of residents. 
                        </div>
                    </div>
                </Link>
    
                <Link to="/independent-living?index=4" className="info-card-link">
                    <div className="info-card-information">
        
                        <img src={HomePage_Plaque5} alt="test"/>
                        <div className="info-card-subtitle">No Healthcare Services Provided</div>
        
                        <div className="info-card-text"> 
                        Unlike assisted living or nursing homes, independent living communities do not 
                        typically provide medical care or assistance with daily living activities. 
                        However, some may offer access to healthcare services if needed.
                        </div>
                    </div>
                </Link>
  
                <Link to="/independent-living?index=5" className="info-card-link">
                    <div className="info-card-information">
                        <img src={HomePage_Plaque6} alt="test"/>
                        <div className="info-card-subtitle">Independence and Self-Sufficiency</div>
        
                        <div className="info-card-text"> 
                        Residents in independent living are usually active and capable of managing their 
                        day-to-day lives without assistance. They have the freedom to come and go as they 
                        please and maintain their independence.
                        </div>
                    </div>
                </Link>
    
                <Link to="/independent-living?index=6" className="info-card-link">
                    <div className="info-card-information">
                        <img src={HomePage_Plaque7} alt="test"/>
                        <div className="info-card-subtitle">Amenities and Services</div>
        
                        <div className="info-card-text"> 
                        Many independent living communities offer amenities like dining services, 
                        transportation, laundry services, and more. These amenities are designed to make 
                        life more convenient and enjoyable for residents.
                        </div>
                    </div>
                </Link>

                <Link to="/independent-living?index=7" className="info-card-link">
                    <div className="info-card-information">
                        <img src={HomePage_Plaque8} alt="test"/>
                        <div className="info-card-subtitle">Community Atmosphere</div>
        
                        <div className="info-card-text"> 
                        These environments often emphasize community and social interaction, providing a 
                        supportive social network for seniors.
                        </div>
                    </div>
                </Link>
    
            </div>
        </div>
    );
    
}

const HomePage = () => {

    const homePageImages = [
        Carousel1,
        Carousel2,
        Carousel3,
        Carousel4,
    ];

    const homePageTitle = [
        "Comfort Care 24/7 LLC",
        "Comfort Care 24/7 LLC",
        "Comfort Care 24/7 LLC",
        "Comfort Care 24/7 LLC"
    ]

    const [homePageIndex, setHomePageIndex] = useState(0);

    const whatIsComfortCare = "At Comfort Care 24/7, compassion is our guiding principle. We pride ourselves on providing compassionate care to our residents round the clock. Our dedicated team is committed to ensuring the comfort and well-being of each individual under our care, treating them with the kindness and respect they deserve. Whether you're considering assisted living or memory care for yourself or a loved one, we're here to offer support and guidance every step of the way. With locations across several states, we strive to create a warm and welcoming environment where residents feel valued and cared for."
    
    return (
        <div className="home-pg-container">
            <div className="home-pg-carousel-container">
                <ImageCarousel 
                        images={homePageImages} 
                        carouselTitles={homePageTitle}
                        carouselIndex={homePageIndex} 
                        setCarouselIndex={setHomePageIndex} 
                    />

            </div>
        
            <div className ="home-pg-content">
                <h2 className="home-pg-title">What Makes Comfort Care Living Different?</h2>
                
                <div className="content-color"/>

                <div className="home-pg-text">
                    {whatIsComfortCare}
                </div>

                <div className="content-color"/>

                <HomePageForm/>

                <div className="content-color"/>

                <HomePageInfoCards/>

            </div>
          



        </div>
    )
}

export default HomePage;