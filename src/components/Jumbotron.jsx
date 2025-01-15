import style from './css/Jumbotron.module.css'
const Jumbotron = (props) => {
  const img = props.img;
  const alt = props.alt;
  return (
    <img className={style.jumbo} src={img} alt={alt} />

  )
}

export default Jumbotron