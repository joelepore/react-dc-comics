// Prendo in input una prop di nome text che viene passata nel footer, in questo modo rendo il mio bottone dinamico
const Button = ({ text }) => {
  return (
    <a href="#">{text}</a>
  )
}

export default Button