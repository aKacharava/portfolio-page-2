import './Button.css'

function Button(props){
  return(
    <a className={props.className + " button"} href={props.link}>{props.name}</a>
  )
}

export default Button