import {
  registerUniformComponent,
  UniformSlot,
  type ComponentProps,
} from "@uniformdev/canvas-react";

type ListContainerProps = ComponentProps<{
  title: string;
}>;

const ListContainer: React.FC<ListContainerProps> = ({ title }) => (
  <div>
    <h3>{title}</h3>
    <UniformSlot name="listItems" />
  </div>
);

registerUniformComponent({
  type: "listContainer",
  component: ListContainer,
});

export default ListContainer;
