import style from './css/Button.module.css'

// Prendo in input una prop di nome text che viene passata nel footer, in questo modo rendo il mio bottone dinamico
const Button = (props) => {

  return (
    <a href="#" className={`${style.button} ${style[props.type]} ${props.className}`}>{props.text}</a>
  )
}

export default Button