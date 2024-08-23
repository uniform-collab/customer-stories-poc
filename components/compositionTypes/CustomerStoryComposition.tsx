import {
  registerUniformComponent,
  UniformSlot,
  type ComponentProps,
} from "@uniformdev/canvas-react";

type CustomerCompositionProps = ComponentProps<{
  title: string;
}>;

const CustomerStoryComposition: React.FC<CustomerCompositionProps> = ({
  title,
}) => (
  <div>
    <h3 className="color-red">{title}</h3>
    <UniformSlot name="content" />
  </div>
);

registerUniformComponent({
  type: "customerStory",
  component: CustomerStoryComposition,
});

export default CustomerStoryComposition;
