import Button from "./partials/Button"

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
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
      </div>
      <div className="footer-bottom">
        <Button text={"SIGN-UP NOW!"} />
        <div>
          <a href="#">Follow Us</a>
          <nav>
            <ul>
              <li><a href="#"><img src="" alt="" /></a></li>
              <li><a href="#"><img src="" alt="" /></a></li>
              <li><a href="#"><img src="" alt="" /></a></li>
              <li><a href="#"><img src="" alt="" /></a></li>
              <li><a href="#"><img src="" alt="" /></a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer