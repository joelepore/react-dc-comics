import style from './css/Label.module.css';
const Label = (props) => {

  return (
    <h3 className={`${style.label} ${style[props.type]}`}>{props.text}</h3>
  )
}

export default Label;