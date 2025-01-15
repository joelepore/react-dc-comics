import HeaderListItem from "./partials/HeaderListItem";

const NavHeader = (props) => {
  const { menu } = props;
  return (
    <nav>
      <ul>
        {menu.map(item => (
          <HeaderListItem key={item.id} data={item} />
        ))}
      </ul>
    </nav>
  )
}

export default NavHeader