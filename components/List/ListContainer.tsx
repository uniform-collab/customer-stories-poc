import {
  registerUniformComponent,
  type ComponentProps,
} from "@uniformdev/canvas-react";
import ListItem from "./ListItem";
import { BlockValue, flattenValues } from "@uniformdev/canvas";

type ListContainerProps = ComponentProps<{
  title: string;
  listItems: BlockValue;
}>;

const ListContainer: React.FC<ListContainerProps> = ({ title, listItems }) => {
  const items = flattenValues(listItems);
  return (
    <div>
      <h3>{title}</h3>
      {(items || []).map((item, index) => (
        <ListItem {...(item as any)} key={index} />
      ))}
    </div>
  );
};

registerUniformComponent({
  type: "listContainer",
  component: ListContainer,
});

export default ListContainer;
