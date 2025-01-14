import Header from "./components/Header"
import Main from "./components/Main"
import NavFeatures from "./components/NavFeatures"
import Footer from "./components/Footer"
// Data
import { headerNavItems } from "./data/menuData"

const App = () => {
  return (
    <>
      <Header menu={headerNavItems} />
      <Main />
      <NavFeatures />
      <Footer />
    </>
  )
}

export default App