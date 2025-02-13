import "./footer.css"
import footerImage from "../../assets/images/MC logo.png"
import ellipse4 from "../../assets/images/Ellipse 4.png"
import ellipse5 from "../../assets/images/ellipse5.png"

const Footer = () => {
    return (
        <>
            <div className="footer-container">

                <div className="footer-logo">
                    <img src={footerImage} alt="footer-logo" />
                    <h2>Medi Cloud.</h2>
                </div>

                <div className="footer-medic">
                    <ul className="footer-lists">
                       
                        <li>Home</li>
                        <li>Prescription</li>
                        <li>Scan Report</li>
                        <li>Blood Test</li>
                        <li>Surgery</li>
                    </ul>
                </div>

                <div className="footer-about">
                    <ul className="footer-lists">
                        <li>About</li>
                        <li>Medic</li>
                        <li>Vision & Mission</li>
                        <li>Careers</li>
                        <li>Support</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div className="footer-social-media">
                    <ul className="footer-lists">
                        <li>Social Media</li>
                        <li>Twitter / X</li>
                        <li>Facebook</li>
                        <li>Instagram</li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <ul className="footer-lists">
                        <li>Contact</li>
                        <li>Austin Texas, 4567 Road Palm</li>
                        <li>+00 123 456 789</li>
                    </ul>
                </div>

                <img className="footer-ellipse1" src={ellipse4} alt="ellipse4" />
                <img className="footer-ellipse2" src={ellipse5} alt="ellipse5" />

            </div>

            <div className="footer-bottom">
                <p>&copy; Medi Cloud 2028</p>
                <p>Legal Policies</p>
                <p>Sitemap</p>
                <p>Cookies</p>
            </div>

        </>


    )
}

export default Footer