import ListItem from "../ListItem";
function Concept(props) {
  return (
    <ListItem>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </ListItem>
  );
}

export default Concept;
