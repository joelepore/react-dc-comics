const cardStyle = {
  width: 'calc(100%/(6))',
  paddingInline: '1rem',
}
const imgStyle = {
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  objectPosition: 'top',
}
const imgWrapperStyle = {
  aspectRatio: '1',
  height: '180px',
}
const textStyle = {
  marginTop: '1rem',
  display: 'inline-block',
  textTransform: 'uppercase',
  fontFamily: 'Oswald',
  color: 'white',
}
const Card = (props) => {
  const { title, img } = props;

  return (
    <div style={cardStyle}>
      <a href="#">
        <div style={imgWrapperStyle}>
          <img src={img} alt={title} style={imgStyle} />
        </div>
        <strong style={textStyle}>{title}</strong>
      </a>
    </div>
  )
}

export default Card