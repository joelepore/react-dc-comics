const FooterListItem = (props) => {
  const item = props.data;
  return (
    <li ><a href={item.url}>{item.text}</a></li>
  )
}

export default FooterListItem