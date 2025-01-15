const HeaderListItem = (props) => {
  const item = props.data;
  return (
    <li><a className={item.isActive ? 'active' : ''} href={item.url}>{item.text}</a></li>
  )
}

export default HeaderListItem