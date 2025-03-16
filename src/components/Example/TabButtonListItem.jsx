import ListItem from "../ListItem";
export default function TabButtonListItem({ children, isSelected, ...props }) {
  return (
    <ListItem>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </ListItem>
  );
}
