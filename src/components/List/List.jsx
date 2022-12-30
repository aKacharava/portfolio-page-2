import ListItem from '../ListItem/ListItem'

function List(props) {
  return(
    <ul className={props.className}>
      {
        props.listItems.map(listItem => 
          <ListItem key={listItem.id} content={listItem.content} />
        )
      }
    </ul>
  )
}

export default List