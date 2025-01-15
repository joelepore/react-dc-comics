import style from './css/Label.module.css';
const Label = (props) => {
  const styleOffset = props.type == "offset" ? style.offset : '';

  return (
    <h3 className={`${style.label} ${styleOffset}`}>{props.text}</h3>
  )
}

export default Label;