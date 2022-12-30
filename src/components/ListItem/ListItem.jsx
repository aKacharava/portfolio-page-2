import './ListItem.css'

function ListItem(props) {
  return(
    <li>
      {props.content}
    </li>
  )
}

export default ListItem