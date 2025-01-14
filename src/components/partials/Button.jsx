// Creo un oggetto style che passo all'inline style
const style = {
  fontWeight: 'bold',
  color: 'white',
  fontSize: '1.1rem',
  padding: '1rem',
  border: '3px solid #0282f9'
}
// Prendo in input una prop di nome text che viene passata nel footer, in questo modo rendo il mio bottone dinamico
const Button = (props) => {
  return (
    <a href="#" style={style}>{props.text}</a>
  )
}

export default Button