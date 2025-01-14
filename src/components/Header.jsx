import Logo from "./partials/Logo";
import NavHeader from "./NavHeader";

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <Logo />
        <NavHeader menu={props.menu} />
      </div>
    </header>
  )
}

export default Header