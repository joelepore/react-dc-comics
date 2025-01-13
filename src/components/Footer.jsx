import Button from "./partials/Button"
import imgFooterLogo from "../assets/img/dc-logo-bg.png"
import imgFacebook from "../assets/img/footer-facebook.png"
import imgTwitter from "../assets/img/footer-twitter.png"
import imgYouTube from "../assets/img/footer-youtube.png"
import imgPinterest from "../assets/img/footer-pinterest.png"
import imgPeriscope from "../assets/img/footer-periscope.png"

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="footer-top-col">
            <div className="footer-top-list">
              <h4>DC Comics</h4>
              <ul>
                <li><a href="#">Characters</a></li>
                <li><a href="#">Comics</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">TV</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">News</a></li>
              </ul>
            </div>
            <div className="footer-top-list">
              <h4>Shop</h4>
              <ul>
                <li><a href="#">Shop DC</a></li>
                <li><a href="#">Shop DC Collectibles</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-top-col">
            <div className="footer-top-list">
              <h4>DC</h4>
              <ul>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy (New)</a></li>
                <li><a href="#">Ad Choices</a></li>
                <li><a href="#">Advertising</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Substriptions</a></li>
                <li><a href="#">Talent Workshops</a></li>
                <li><a href="#">CPSC Certificates</a></li>
                <li><a href="#">Ratings</a></li>
                <li><a href="#">Shop Help</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-top-col">
            <div className="footer-top-list">
              <h4>Sites</h4>
              <ul>
                <li><a href="#">DC</a></li>
                <li><a href="#">MAD Magazine</a></li>
                <li><a href="#">DC Kids</a></li>
                <li><a href="#">DC Universe</a></li>
                <li><a href="#">DC Power Visa</a></li>
              </ul>
            </div>
          </div>
          <img src={imgFooterLogo} alt="Logo" />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <Button text={"SIGN-UP NOW!"} />
          <div className="footer-bottom-right">
            <a href="#">Follow Us</a>
            <nav>
              <ul>
                <li><a href="#"><img src={imgFacebook} alt="Facebook Logo" /></a></li>
                <li><a href="#"><img src={imgTwitter} alt="Twitter Logo" /></a></li>
                <li><a href="#"><img src={imgYouTube} alt="YouTube Logo" /></a></li>
                <li><a href="#"><img src={imgPinterest} alt="Pinterest Logo" /></a></li>
                <li><a href="#"><img src={imgPeriscope} alt="Periscope Logo" /></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer