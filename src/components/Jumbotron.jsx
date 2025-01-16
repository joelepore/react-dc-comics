import style from './css/Jumbotron.module.css'
const Jumbotron = (props) => {
  const img = props.img;
  const alt = props.alt;
  return (
    <div>
      <img className={style.jumbo} src={img} alt={alt || 'DC Comics'} />
    </div>

  )
}

export default Jumbotron