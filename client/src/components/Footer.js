import "../styles/footer.css";
import { Link } from "react-router-dom";


const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-contents">

                <div className="footer-color"/>


                <div className="nav-footer">
                    <Link to="/about-us">
                        <button className="nav-item-footer">About Us</button>
                    </Link>

                    <Link to="/independent-living">
                        <button className="nav-item-footer">Independent Living</button>
                    </Link>

                    <Link to="/partnership">
                        <button className="nav-item-footer">Partnership</button>
                    </Link>

                    <Link to="/contact-us">
                        <button className="nav-item-footer">Contact Us</button>
                    </Link>
                </div>
            </div>

            <div className ="copyright-notice">@Comfort Care 24/7 LLC</div>
            <div className="footer-color"/>

        </div>
    )
}

export default Footer;