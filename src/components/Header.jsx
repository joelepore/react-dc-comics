import Logo from "./partials/Logo";
import NavHeader from "./NavHeader";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Logo />
        <NavHeader />
      </div>
    </header>
  )
}

export default Header