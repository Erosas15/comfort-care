import React from "react";
import { useState } from "react";
import "../styles/homePage.css";

// imported images
import HomePage_Photo1 from "./photos/hm-pg-photo1.jpg";
import HomePage_Photo2 from "./photos/hm-pg-photo2.jpg";
import axios from "axios";

const HomePageCarousel = ({images}) => {
    const [imageIndex, setImageIndex] = useState(0);

    function showNextImage(){
        setImageIndex((imageIndex + 1) % images.length);
    }

    function showPrevImage(){
        setImageIndex((imageIndex - 1 + images.length) % images.length);
    }

    function goToImage(index){
        setImageIndex(index);
    }
    
    return(
        <div className="home-page-img-carousel">
            <div className="home-pg-left-arrow" onClick={showPrevImage}>&#x276E;</div>

            <div className="home-pg-right-arrow" onClick={showNextImage}>&#x276F;</div>

            <div style={{backgroundImage: `url(${images[imageIndex]})`}} 
                className="home-pg-carousel">
            </div>

            <div className="home-pg-carousel-selector">
                {images.map((images,imageIndex) => (
                    <div key={imageIndex} className="home-pg-dot-container" 
                    onClick={() => goToImage(imageIndex)}>•</div>
                ))}
            </div>
          
        </div>
    )
}

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

const HomePage = () => {

    const IMAGES = [
        HomePage_Photo1,
        HomePage_Photo2
    ];


    return (
        <div className="home-pg-container">
            <div className="home-pg-carousel-container">
                <HomePageCarousel images={IMAGES} />

            </div>
        
            <div className ="home-pg-content">
                <h2 className="home-pg-title">What Makes Comfort Care Living Different?</h2>
                
                <div className="content-color"/>

                <div className="home-pg-text">
                At Comfort Care 24/7, compassion is our guiding principle. We pride 
                ourselves on providing compassionate care to our residents round the 
                clock. Our dedicated team is committed to ensuring the comfort and 
                well-being of each individual under our care, treating them with the
                 kindness and respect they deserve. Whether you're considering assisted 
                 living or memory care for yourself or a loved one, we're here to offer 
                 support and guidance every step of the way. With locations across 
                 several states, we strive to create a warm and welcoming environment
                  where residents feel valued and cared for.
                </div>

                <div className="content-color"/>

                <HomePageForm/>

            </div>
          



        </div>
    )
}

export default HomePage;