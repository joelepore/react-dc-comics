import Header from "./components/Header"
import Main from "./components/Main"
import NavFeatures from "./components/NavFeatures"
import Footer from "./components/Footer"
// Data
import { headerNavItems, footerNavItems } from "./data/menuData"
import Jumbotron from "./components/Jumbotron"

const App = () => {
  return (
    <>
      <Header menu={headerNavItems} />
      <Jumbotron img="/jumbotron.jpg" />
      <Main />
      <NavFeatures />
      <Footer data={footerNavItems} />
    </>
  )
}

export default App