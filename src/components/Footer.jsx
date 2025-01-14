import Button from "./partials/Button"
import imgFooterLogo from "../assets/img/dc-logo-bg.png"
import imgFacebook from "../assets/img/footer-facebook.png"
import imgTwitter from "../assets/img/footer-twitter.png"
import imgYouTube from "../assets/img/footer-youtube.png"
import imgPinterest from "../assets/img/footer-pinterest.png"
import imgPeriscope from "../assets/img/footer-periscope.png"

const btnText = 'SIGN UP NOW!';

const Footer = (props) => {
  const footerNavItems = props.data;
  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <div className="footer-top-col">
            <div className="footer-top-list">
              <h4>DC Comics</h4>
              <ul>
                {footerNavItems.dcComics.map(item => (
                  <li key={`dccomics-${item.id}`}><a href={item.url}>{item.text}</a></li>
                ))}
              </ul>
            </div>
            <div className="footer-top-list">
              <h4>Shop</h4>
              <ul>
                {footerNavItems.shop.map(item => (
                  <li key={`shop-${item.id}`}><a href={item.url}>{item.text}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-top-col">
            <div className="footer-top-list">
              <h4>DC</h4>
              <ul>
                {footerNavItems.dc.map(item => (
                  <li key={`dc-${item.id}`}><a href={item.url}>{item.text}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-top-col">
            <div className="footer-top-list">
              <h4>Sites</h4>
              <ul>
                {footerNavItems.sites.map(item => (
                  <li key={`sites-${item.id}`}><a href={item.url}>{item.text}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <img src={imgFooterLogo} alt="Logo" />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <Button text={btnText} />
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