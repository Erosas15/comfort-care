import { useState } from "react";
import ImageCarousel from "./ImageCarousel";
import "../styles/aboutUsPage.css"

import AboutUsImage1 from "./photos/aboutUs_page/aboutUs-pg-1.jpg";
import AboutUsImage2 from "./photos/aboutUs_page/aboutUs-pg-2.jpg";
import John from "./photos/aboutUs_page/john.jpg"


const AboutUsPage = () => {

    const aboutUsPageImages = [
        AboutUsImage1,
        AboutUsImage2
    ];

    const aboutUsPageTitle = [
        "Who are we?",
        "Who are we?"
    ]

    const [aboutUsPageIndex, setAboutUsIndex] = useState(0);
    
    const ourStoryText = "We grew up in the city of Corona as the two oldest of four siblings. Our family of six lived in a one-bedroom apartment, and we were low-income throughout our childhood. Our mother worked two jobs to support us, while our father was chronically ill for most of his life. His struggles and the lack of resources available to him motivated us to pursue careers in healthcare and start an organization dedicated to helping seniors in need, providing them with the support and resources that could have improved our father's quality of life. Our father passed away on January 9, 2024, due to complications such as diabetes and respiratory issues. This profound loss inspired us to take action";

    const aboutJohn = "I graduated with a Bachelor of Science degree in Mechanical Engineering from the University of California, Los Angeles. My education at UCLA has provided me with a strong foundation in engineering principles and a passion for innovative problem-solving.\nMy journey in community service began with volunteering at the local YMCA  and local events held by the city of Corona.\nI was involved in outreach events at UCLA, aimed at inspiring underrepresented middle and high school students in pursuing STEM field careers. These experiences opened my eyes to the importance of community engagement and motivated me to contribute actively to such programs.\nIn addition to my professional pursuits, I enjoy spending time with friends and family, playing sports such as soccer and basketball, and working out. Balancing my work and personal life helps me stay motivated and brings fresh perspectives to my endeavors.\nI am dedicated to making a positive impact through both engineering and community service, and I am committed to continuous learning and development to achieve this mission.";
    const aboutAnthony ="I’m currently working towards a career in nursing and have a Bachelor of Science degree in Biology from the University of California, Riverside. My journey in healthcare started with volunteering in underserved communities, where I worked in free clinics in Riverside and Coachella. These experiences opened my eyes to the critical need for accessible healthcare and motivated me to be part of programs advocating for community health and promoting healthy living.\nI've also had the privilege of working as a caregiver, providing essential support to seniors through the IHSS program. This role has been incredibly rewarding and has deepened my commitment to improving the lives of those in need.\nWhen I’m not working or studying, you’ll often find me playing soccer or spending quality time with my family. Both activities bring me a lot of joy and help me stay grounded. Soccer keeps me active and engaged, while time with my family reminds me of the importance of strong, supportive relationships.\nI’m passionate about making a difference in the world of senior care and am dedicated to continuing my education and professional development to provide the best care possible.";

    return (
        <div className="about-us-page-container">
            <div className="about-us-pg-carousel-container">
              <ImageCarousel 
                        images={aboutUsPageImages} 
                        carouselTitles={aboutUsPageTitle}
                        carouselIndex={aboutUsPageIndex} 
                        setCarouselIndex={setAboutUsIndex} 
                    />
            </div>


            <div className ="about-us-pg-content">
                <h2 className="about-us-pg-title">Our Story</h2>

                <div className="content-color"/>

                <div className="about-us-page-text">
                    {ourStoryText}
                </div>

                <div className="content-color"/>

                <div className="team-members">
                    
                    <div className="team-member-container">

                        <div className="team-member-content">
                            <div className="team-member-title">About John</div>
                            
                            <div className="team-member-text">
                                {aboutJohn}
                            </div>
                        </div>

                        <div className="team-member-image">
                            <img src={John} alt="john-pic"/>
                        </div>
                        
                    </div>

                    <div className="team-member-container">

                        <div className="team-member-image">
                            <img src={John} alt="anthony-pic"/>
                        </div>

                        <div className="team-member-content">
                            <div className="team-member-title">About Anthony</div>
                            
                            <div className="team-member-text">
                                {aboutAnthony}
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default AboutUsPage;