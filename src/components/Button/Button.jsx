import './Button.css'

function Button(props){
  return (
    <button className={props.className + " button"} onClick={props.onShowNav}>
      {props.name}
    </button>
  );
}

export default Button