import './ListItem.css'

function ListItem(props) {
  return(
    <li className='list-item'>
      {props.content}
    </li>
  )
}

export default ListItem