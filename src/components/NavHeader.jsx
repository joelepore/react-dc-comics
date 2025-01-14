const NavHeader = (props) => {
  const { menu } = props;
  return (
    <nav>
      <ul>
        {menu.map(item => (
          <li key={item.id}><a className={item.isActive ? 'active' : ''} href={item.url}>{item.text}</a></li>
        ))}
        {/* <li><a href="#">Characters</a></li>
        <li><a className="active" href="#">Comics</a></li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">TV</a></li>
        <li><a href="#">Games</a></li>
        <li><a href="#">Collectibles</a></li>
        <li><a href="#">Videos</a></li>
        <li><a href="#">Fans</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Shop</a></li> */}
      </ul>
    </nav>
  )
}

export default NavHeader