import Button from "./partials/Button"
import FooterListItem from "./partials/FooterListItem"

import imgFooterLogo from "../assets/img/dc-logo-bg.png"

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
                  <FooterListItem key={`dccomics-${item.id}`} data={item} />
                ))}
              </ul>
            </div>
            <div className="footer-top-list">
              <h4>Shop</h4>
              <ul>
                {footerNavItems.shop.map(item => (
                  <FooterListItem key={`shop-${item.id}`} data={item} />
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-top-col">
            <div className="footer-top-list">
              <h4>DC</h4>
              <ul>
                {footerNavItems.dc.map(item => (
                  <FooterListItem key={`dc-${item.id}`} data={item} />
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-top-col">
            <div className="footer-top-list">
              <h4>Sites</h4>
              <ul>
                {footerNavItems.sites.map(item => (
                  <FooterListItem key={`sites-${item.id}`} data={item} />
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
                {footerNavItems.footerBottom.map(item => (
                  <li key={`footer-bottom-${item.id}`}>
                    <a href={item.url}><img src={item.img} alt="Logo" /></a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer