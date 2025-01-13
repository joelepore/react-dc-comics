import imgDigitalComics from '../assets/img/buy-comics-digital-comics.png'
import imgMerchandise from '../assets/img/buy-comics-merchandise.png'
import imgSubscription from '../assets/img/buy-comics-subscriptions.png'
import imgShopLocator from '../assets/img/buy-comics-shop-locator.png'
import imgPowerVisa from '../assets/img/buy-dc-power-visa.svg'

const NavFeatures = () => {
  return (
    <nav className="nav-features">
      <div className="container">

        <ul>
          <li><a href="#"><img src={imgDigitalComics} alt="" />Digital Comics</a></li>
          <li><a href="#"><img src={imgMerchandise} alt="" />DC Merchandise</a></li>
          <li><a href="#"><img src={imgSubscription} alt="" />Subscription</a></li>
          <li><a href="#"><img src={imgShopLocator} alt="" />Comic Shop Locator</a></li>
          <li><a href="#"><img src={imgPowerVisa} alt="" />DC Power Visa</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default NavFeatures