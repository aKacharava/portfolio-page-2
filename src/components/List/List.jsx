import ListItem from '../ListItem/ListItem'

function List(props) {
  return (
    <ul className={props.className}>
      {props.listItems.map((listItem, idx) => (
        <ListItem key={idx} content={listItem.content} />
      ))}
    </ul>
  );
}

export default List