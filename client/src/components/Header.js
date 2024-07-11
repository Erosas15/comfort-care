import logo from "./photos/logo.png";
import "../styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="header">
            <div className="header-color"/>

            <div className="header-top"> 
                <div className="header-left">
                    
                    <Link to="/" className="logo-nav">
                        <div className="company-name-container">
                            <div className="logo">
                                <img src={logo} alt="LOGO"/>
                            </div>

                            <div className="company-name">Comfort Care 24/7 </div>
                        </div>

                    </Link>
                   
                </div>

                <div className="header-right">
                    <div className="subtext">Get Pricing & Schedule Tour</div>
                    <div className="phone-number">951-500-0904</div>
                </div>            
            </div>

            <div className="nav-header">
                <Link to="/about-us">
                    <button className="nav-item-header">About Us</button>
                </Link>

                <Link to="/independent-living">
                    <button className="nav-item-header">Independent Living</button>
                </Link>

                <Link to="/partnership">
                    <button className="nav-item-header">Partnership</button>
                </Link>

                <Link to="/contact-us">
                    <button className="nav-item-header">Contact Us</button>
                </Link>
                
            </div>

            <div className="header-color"/>

        </div>
    )
}

export default Header;